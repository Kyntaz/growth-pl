import { IExpression } from "../IExpression";

export class NotEqualsOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }
}
