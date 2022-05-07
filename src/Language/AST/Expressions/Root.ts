import { IExpression } from "./IExpression";

export class Root implements IExpression {
    constructor(
        public to: IExpression,
    ) { }
}