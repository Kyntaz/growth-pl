import { Parser } from "./Parser/Parser";
import { Runtime } from "./Runtime/Runtime";

export function growth(code: string) {
    const runtime = new Runtime();
    console.log("Welcome to the 🌱 Growth Programming Language!");

    const ast = Parser.parse(code);
    runtime.execute(ast);
}