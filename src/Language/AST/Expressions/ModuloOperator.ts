import { IExpression } from "./IExpression";

export class ModuloOperator implements IExpression {
    constructor(
        public antecedent: IExpression,
        public consequent: IExpression,
    ) { }
}
