const fs = require("fs");
const peggy = require("peggy");
const tspegjs = require("ts-pegjs");

const grammarSpec = fs.readFileSync("./src/Grammar/Grammar.pegjs").toString();

var parser = peggy.generate(grammarSpec, {
    output: 'source',
    format: 'commonjs',
    plugins: [tspegjs],
});

fs.writeFileSync("./src/Grammar/Grammar.generated.ts", parser);
