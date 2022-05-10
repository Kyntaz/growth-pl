import { IExpression } from "../IExpression";

export class LessThanOrEqualsOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }
}
