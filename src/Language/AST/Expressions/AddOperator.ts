import { IExpression } from "./IExpression";

export class AddOperator implements IExpression {
    constructor(
        public antecedent: IExpression,
        public consequent: IExpression,
    ) { }
}