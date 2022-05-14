import { ILanguageElement } from "../ILanguageElement";
import { IVisitor } from "../IVisitor";
import { Segment } from "./Segment";

export class Garden implements ILanguageElement {
    constructor(
        public seeds: Segment[],
        public trunk?: Segment,
    ) { }

    public accept<R>(visitor: IVisitor): R {
        return visitor.vGarden(this);
    }
}
