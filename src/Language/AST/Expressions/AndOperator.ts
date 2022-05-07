import { IExpression } from "./IExpression";

export class AndOperator implements IExpression {
    constructor(
        public antecedent: IExpression,
        public consequent: IExpression,
    ) { }
}