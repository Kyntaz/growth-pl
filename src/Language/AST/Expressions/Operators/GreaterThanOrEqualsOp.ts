import { IVisitor } from "../../../IVisitor";
import { IExpression } from "../IExpression";

export class GreaterThanOrEqualsOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }

    public accept<R>(visitor: IVisitor): R {
        return visitor.vGreaterThanOrEqualsOp(this);
    }
}
