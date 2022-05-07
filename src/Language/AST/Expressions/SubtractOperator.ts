import { IExpression } from "./IExpression";

export class SubtractOperator implements IExpression {
    constructor(
        public antecedent: IExpression,
        public consequent: IExpression,
    ) { }
}