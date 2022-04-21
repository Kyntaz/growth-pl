import { ILanguageElement } from "./ILanguageElement";

export interface ILanguageVisitor {
    visit<Element extends ILanguageElement>(element: Element): void
}
