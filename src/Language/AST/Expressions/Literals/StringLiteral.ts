import { IVisitor } from "../../../IVisitor";
import { IExpression } from "../IExpression";

export class StringLiteral implements IExpression {
    constructor(
        public value: string,
    ) { }

    public accept<R>(visitor: IVisitor<R>): R {
        return visitor.vStringLiteral(this);
    }
}
