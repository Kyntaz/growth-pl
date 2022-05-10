import { IExpression } from "../IExpression";

export class GreaterThanOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }
}
