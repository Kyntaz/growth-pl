import { IVisitor } from "../../../IVisitor";
import { IExpression } from "../IExpression";

export class LessThanOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }

    public accept<R>(visitor: IVisitor<R>): R {
        return visitor.vLessThanOp(this);
    }
}
