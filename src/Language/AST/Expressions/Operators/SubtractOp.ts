import { IExpression } from "../IExpression";

export class SubtractOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }
}