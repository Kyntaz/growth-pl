import { IExpression } from "../IExpression";

export class LessThanOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }
}
