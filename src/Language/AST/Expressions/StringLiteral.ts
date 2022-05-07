import { IExpression } from "./IExpression";

export class StringLiteral implements IExpression {
    constructor(
        public value: string,
    ) { }
}
