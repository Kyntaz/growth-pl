import { IVisitor } from "../../../IVisitor";
import { IExpression } from "../IExpression";

export class GreaterThanOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }

    public accept<R>(visitor: IVisitor): R {
        return visitor.vGreaterThanOp(this);
    }
}
