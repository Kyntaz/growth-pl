import { parser } from  "../Grammar/Grammar.generated";
import { Garden } from "../Language/AST/Garden";
import * as AST from "../Language/AST/AST";

export class Parser {
    public static parse(code: string) {
        parser.yy = AST;
        return (parser as any).parse(code) as Garden;
    }
}
