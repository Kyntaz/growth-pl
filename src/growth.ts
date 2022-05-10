import { Parser } from "./Parser/Parser";

export function growth(code: string) {
    console.log("Welcome to the 🌱 Growth Programming Language!");

    try {
        const ast = Parser.parse(code);
        console.log(JSON.stringify(ast, null, 4));
    } catch (e) {
        console.log(e.format([
            {
                text: code,
            }
        ]));
    }
}