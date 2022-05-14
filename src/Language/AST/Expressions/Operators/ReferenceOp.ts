import { IVisitor } from "../../../IVisitor";
import { IExpression } from "../IExpression";

export class ReferenceOp implements IExpression {
    constructor(
        public arg: IExpression,
    ) { }

    public accept<R>(visitor: IVisitor): R {
        return visitor.vReferenceOp(this);
    }
}
