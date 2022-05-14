import { IExpression } from "../IExpression";

export class AndOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }
}
