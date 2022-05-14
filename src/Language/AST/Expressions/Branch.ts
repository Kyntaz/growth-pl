import { Segment } from "../Segment";
import { IExpression } from "./IExpression";

export class Branch implements IExpression {
    constructor(
        public segments: Segment[],
    ) { }
}