import { IVisitor } from "../../../IVisitor";
import { IExpression } from "../IExpression";

export class BooleanLiteral implements IExpression {
    constructor(
        public value: boolean,
    ) { }

    public accept<R>(visitor: IVisitor): R {
        return visitor.vBooleanLiteral(this);
    }
}