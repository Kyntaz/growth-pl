import { IExpression } from "./IExpression";

export class NegativeOperator implements IExpression {
    constructor(
        public arg: IExpression,
    ) { }
}