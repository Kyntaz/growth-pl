import { IExpression } from "../IExpression";

export class ReferenceOp implements IExpression {
    constructor(
        public arg: IExpression,
    ) { }
}
