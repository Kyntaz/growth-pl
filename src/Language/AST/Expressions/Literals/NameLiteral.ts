import { IExpression } from "../IExpression";

export class NameLiteral implements IExpression {
    constructor(
        public value: string,
    ) { }
}