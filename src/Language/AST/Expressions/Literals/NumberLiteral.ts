import { IVisitor } from "../../../IVisitor";
import { IExpression } from "../IExpression";

export class NumberLiteral implements IExpression {
    constructor(
        public value: number,
    ) { }

    public accept<R>(visitor: IVisitor): R {
        return visitor.vNumberLiteral(this);
    }
}
