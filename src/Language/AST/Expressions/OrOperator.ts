import { IExpression } from "./IExpression";

export class OrOperator implements IExpression {
    constructor(
        public antecedent: IExpression,
        public consequent: IExpression,
    ) { }
}