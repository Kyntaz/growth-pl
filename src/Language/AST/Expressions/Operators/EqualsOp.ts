import { IExpression } from "../IExpression";

export class EqualsOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }
}
