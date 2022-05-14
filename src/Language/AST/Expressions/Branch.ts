import { IVisitor } from "../../IVisitor";
import { Segment } from "../Segment";
import { IExpression } from "./IExpression";

export class Branch implements IExpression {
    constructor(
        public segments: Segment[],
    ) { }

    public accept<R>(visitor: IVisitor): R {
        return visitor.vBranch(this);
    }
}