import { IExpression } from "./IExpression";

export class Name implements IExpression {
    constructor(
        public value: string,
    ) { }
}