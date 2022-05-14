import { IExpression } from "../IExpression";

export class MultiplyOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }
}