import { IExpression } from "../IExpression";

export class DivideOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }
}