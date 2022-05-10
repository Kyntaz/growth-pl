import { IExpression } from "../IExpression";

export class GreaterThanOrEqualsOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }
}
