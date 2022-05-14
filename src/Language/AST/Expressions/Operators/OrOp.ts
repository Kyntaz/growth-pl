import { IVisitor } from "../../../IVisitor";
import { IExpression } from "../IExpression";

export class OrOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }

    public accept<R>(visitor: IVisitor): R {
        return visitor.vOrOp(this);
    }
}
