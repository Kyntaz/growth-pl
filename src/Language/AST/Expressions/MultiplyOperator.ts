import { IExpression } from "./IExpression";

export class MultiplyOperator implements IExpression {
    constructor(
        public antecedent: IExpression,
        public consequent: IExpression,
    ) { }
}