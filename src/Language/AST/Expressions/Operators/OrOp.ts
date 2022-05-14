import { IExpression } from "../IExpression";

export class OrOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }
}
