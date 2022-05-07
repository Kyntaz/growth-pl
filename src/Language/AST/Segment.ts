import { ILanguageElement } from "../ILanguageElement";
import { IExpression } from "./Expressions/IExpression";

export class Segment implements ILanguageElement {
    constructor(
        public instruction: string,
        public args: IExpression[],
        public name?: string,
    ) { }
}