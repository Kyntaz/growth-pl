import { IVisitor } from "./IVisitor";

export interface ILanguageElement {
    accept<R>(visitor: IVisitor<R>): R;
}
