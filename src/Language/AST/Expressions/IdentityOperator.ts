import { IExpression } from "./IExpression";

export class IdentityOperator implements IExpression {
    constructor(
        public arg: IExpression,
    ) { }
}