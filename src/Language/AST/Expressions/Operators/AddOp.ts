import { IExpression } from "../IExpression";

export class AddOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }
}
