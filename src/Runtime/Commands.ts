import { Branch } from "../Language/AST/AST";
import { Runtime } from "./Runtime";

export const commands = {
    "seed": (runtime: Runtime, args: any[], name: string) => {
        runtime.registerSeed(name, args[0]);
    },

    "trunk": (runtime: Runtime, args: any[], name: string) => {
        const branch = args[0] as Branch;
        runtime.pushBranch();
        for (const segment of branch.segments) {
            runtime.execute(segment);
        }
    },

    "=": (runtime: Runtime, args: any[], name: string) => {
        return args[0];
    },

    "write": (runtime: Runtime, args: any[], name: string) => {
        process.stdout.write(args[0] + (args[1] ?? true ? "\n" : ""));
        return args[0];
    },

    "?": (runtime: Runtime, args: any[], name: string) => {
        const branch = (args[0] ? args[1] : args[2]) as Branch;
        if (!branch) {
            return null;
        }

        const loc = runtime.pushBranch();
        for (const segment of branch.segments) {
            runtime.execute(segment);
        }
        runtime.popBranch();
        return loc;
    },

    "branch": (runtime: Runtime, args: any[], name: string) => {
        const branch = args[0] as Branch;
        const loc = runtime.pushBranch();
        for (const segment of branch.segments) {
            runtime.execute(segment);
        }
        runtime.popBranch();
        return loc;
    }
}
