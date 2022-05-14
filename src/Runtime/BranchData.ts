import { Location } from "./Location";

export class BranchData {
    private data: any[] = [];

    constructor(public root?: Location) { }

    public read(at: number): any {
        return this.data[at];
    }

    public write(value: any): Location {
        const loc = this.where();
        this.data.push(value);
        return loc;
    }

    public where(): Location {
        return {
            branch: this,
            at: this.data.length,
        };
    }
}
