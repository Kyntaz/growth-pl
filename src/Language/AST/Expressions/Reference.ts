import { IExpression } from "./IExpression";

export class Reference implements IExpression {
    constructor(
        public to: IExpression,
    ) { }
}