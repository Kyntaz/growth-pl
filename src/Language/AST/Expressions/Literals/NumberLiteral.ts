import { IExpression } from "../IExpression";

export class NumberLiteral implements IExpression {
    constructor(
        public value: number,
    ) { }
}
