import { Location } from "./Location";

export class BranchData {
    private data = new Map<number, any>();

    constructor(public root?: Location) { }

    public read(at: number) {
        const value = this.data.get(at);
        if (value === undefined) {
            throw new Error(`Out of bounds: ${at}`);
        }
        return value;
    }

    public write(value: any, line: number): Location {
        this.data.set(line, value);
        return {
            branch: this,
            at: line,
        };
    }

    public written(at: number) {
        return this.data.get(at) !== undefined;
    }
}
