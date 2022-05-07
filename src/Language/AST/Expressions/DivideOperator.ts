import { IExpression } from "./IExpression";

export class DivideOperator implements IExpression {
    constructor(
        public antecedent: IExpression,
        public consequent: IExpression,
    ) { }
}