import { ILanguageElement } from "../ILanguageElement";
import { Segment } from "./Segment";

export class Branch implements ILanguageElement {
    constructor(
        public segments: Segment[],
    ) { }
}