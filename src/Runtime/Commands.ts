import { Branch, Segment } from "../Language/AST/AST";
import { Runtime } from "./Runtime";
import * as promptModule from "prompt-sync";

function segmentDone(segment: Segment, runtime: Runtime) {
    return runtime.written(segment.line);
}

function branchRemaining(branch: Branch, runtime: Runtime) {
    const segmentsRemaining = branch.segments.filter((segment) => !segmentDone(segment, runtime));
    return segmentsRemaining.length;
}

export const commands = {
    "seed": (runtime: Runtime, args: any[], name: string) => {
        runtime.registerSeed(name, args[0]);
    },

    "trunk": (runtime: Runtime, args: any[], name: string) => {
        const branch = args[0] as Branch;
        runtime.pushBranch();
        let remaining = branchRemaining(branch, runtime);
        while (remaining > 0) {
            for (const segment of branch.segments) {
                if (!segmentDone(segment, runtime)) {
                    runtime.execute(segment);
                }
            }
            const newRemaining = branchRemaining(branch, runtime);
            if (newRemaining >= remaining) {
                throw new Error("Unstable trunk");
            }
            remaining = newRemaining;
        }
    },

    "=": (runtime: Runtime, args: any[], name: string) => {
        return args[0];
    },

    "write": (runtime: Runtime, args: any[], name: string) => {
        process.stdout.write(args[0] + (args[1] ?? true ? "\n" : ""));
        return args[0];
    },

    "read": (runtime: Runtime, args: any[], name: string) => {
        const prompt = promptModule({ sigint: true });
        const value = prompt(args[0] ?? "");
        if (args[1]) {
            return Number(value);
        }
        return value;
    },

    "?": (runtime: Runtime, args: any[], name: string) => {
        const branch = (args[0] ? args[1] : args[2]) as Branch;
        if (!branch) {
            return null;
        }

        const loc = runtime.pushBranch();
        let remaining = branchRemaining(branch, runtime);
        while (remaining > 0) {
            for (const segment of branch.segments) {
                if (!segmentDone(segment, runtime)) {
                    runtime.execute(segment);
                }
            }
            const newRemaining = branchRemaining(branch, runtime);
            if (newRemaining >= remaining) {
                runtime.popBranch();
                throw new Error("Unstable conditional branch");
            }
            remaining = newRemaining;
        }
        runtime.popBranch();
        return loc;
    },

    "branch": (runtime: Runtime, args: any[], name: string) => {
        const branch = args[0] as Branch;
        const loc = runtime.pushBranch();
        let remaining = branchRemaining(branch, runtime);
        while (remaining > 0) {
            for (const segment of branch.segments) {
                if (!segmentDone(segment, runtime)) {
                    runtime.execute(segment);
                }
            }
            const newRemaining = branchRemaining(branch, runtime);
            if (newRemaining >= remaining) {
                runtime.popBranch();
                throw new Error("Unstable branch");
            }
            remaining = newRemaining;
        }
        runtime.popBranch();
        return loc;
    }
}
