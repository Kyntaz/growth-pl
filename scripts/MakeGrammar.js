// const fs = require("fs");
// const jison = require("jison");
const { execSync } = require("child_process");

execSync("npx jison ./src/Grammar/Grammar.jison -o ./src/Grammar/Grammar.generated.js");

// var grammarSource = fs.readFileSync("./src/Grammar/Grammar.jison", "utf-8");
// var parser = new jison.Parser(grammarSource).generate();

// fs.writeFileSync("./src/Grammar/Grammar.generated.ts", parser);
