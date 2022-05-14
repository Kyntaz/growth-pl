import { ILanguageElement } from "../ILanguageElement";
import { Segment } from "./Segment";

export class Garden implements ILanguageElement {
    constructor(
        public seeds: Segment[],
        public trunk?: Segment,
    ) { }
}
