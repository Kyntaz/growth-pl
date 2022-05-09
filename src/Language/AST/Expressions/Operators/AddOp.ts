import { IExpression } from "../IExpression";

class AddOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }
}
