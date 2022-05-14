import { IVisitor } from "../../../IVisitor";
import { IExpression } from "../IExpression";

export class HereLiteral implements IExpression {
    public accept<R>(visitor: IVisitor): R {
        return visitor.vHereLiteral(this);
    }
}
