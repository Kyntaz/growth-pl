import { parse as parseFunction } from "../Grammar/Grammar.generated";
import { Garden } from "../Language/AST/Garden";

export class Parser {
    public static parse(code: string) {
        return parseFunction(code) as Garden;
    }
}
