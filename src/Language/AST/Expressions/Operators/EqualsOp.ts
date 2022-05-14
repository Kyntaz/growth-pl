import { IVisitor } from "../../../IVisitor";
import { IExpression } from "../IExpression";

export class EqualsOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }

    public accept<R>(visitor: IVisitor<R>): R {
        return visitor.vEqualsOp(this);
    }
}
