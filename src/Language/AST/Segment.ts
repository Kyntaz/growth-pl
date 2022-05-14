import { ILanguageElement } from "../ILanguageElement";
import { IVisitor } from "../IVisitor";
import { IExpression } from "./Expressions/IExpression";

export class Segment implements ILanguageElement {
    constructor(
        public command: string,
        public args: IExpression[],
        public name?: string,
    ) { }

    public accept<R>(visitor: IVisitor): R {
        return visitor.vSegment(this);
    }
}