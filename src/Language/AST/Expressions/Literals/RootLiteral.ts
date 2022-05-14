import { IVisitor } from "../../../IVisitor";
import { IExpression } from "../IExpression";

export class RootLiteral implements IExpression {
    public accept<R>(visitor: IVisitor): R {
        return visitor.vRootLiteral(this);
    }
}
