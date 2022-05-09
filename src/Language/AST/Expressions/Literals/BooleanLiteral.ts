import { IExpression } from "../IExpression";

export class BooleanLiteral implements IExpression {
    constructor(
        public value: boolean,
    ) { }
}