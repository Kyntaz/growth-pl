import { Branch } from "../Language/AST/AST";
import { Location } from "./Location";
import { Executor } from "./Executor";
import { BranchData } from "./BranchData";
import { ILanguageElement } from "../Language/ILanguageElement";
import { commands } from "./Commands";

export class Runtime {
    private commands = commands;
    private executor = new Executor(this);
    private branchData: BranchData = null;
    private seeds = new Map<string, Branch>();
    private names = new Map<string, Location>();
    private currentLine = 0;

    public execute(element: ILanguageElement) {
        return element.accept(this.executor);
    }

    public pushBranch(): Location {
        this.branchData = new BranchData(this.where() ?? null);
        return {
            branch: this.branchData,
            at: 0,
        };
    }

    public popBranch() {
        this.currentLine = this.branchData.root?.at ?? 0;
        this.branchData = this.branchData.root?.branch ?? null;
    }

    public assign(name: string, location: Location) {
        this.names.set(name, location);
    }

    public read(name: string) {
        const seed = this.seeds.get(name);
        if (seed) {
            return seed;
        }

        const location = this.names.get(name);
        if (location) {
            return location;
        }

        throw new Error("Name does not exist");
    }

    public currentRoot() {
        return this.branchData.root;
    }

    public at(location: number | Location) {
        if (typeof location === "number") {
            return this.branchData.read(location);
        }
        return location.branch.read(location.at);
    }

    public written(line: number) {
        return this.branchData.written(line);
    }

    public setLine(line: number) {
        this.currentLine = line;
    }

    public doCommand(command: string, args: any[], name: string): Location {
        const result = this.commands[command as keyof typeof this.commands](this, args, name);
        if (this.branchData) {
            return this.branchData.write(result, this.currentLine);
        }
    }

    public failCommand(line: number) {
        this.branchData.write(undefined, line);
    }

    public registerSeed(name: string, branch: Branch) {
        this.seeds.set(name, branch);
    }

    public where(): Location {
        if (this.branchData) {
            return {
                branch: this.branchData,
                at: this.currentLine,
            };
        } else {
            return null;
        }
    }
}