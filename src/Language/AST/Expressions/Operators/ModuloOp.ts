import { IExpression } from "../IExpression";

export class ModuloOp implements IExpression {
    constructor(
        public left: IExpression,
        public right: IExpression,
    ) { }
}
