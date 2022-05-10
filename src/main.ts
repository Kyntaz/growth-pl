import { growth } from "./growth";
import * as fs from "fs";

const path = process.argv[2];
const code = fs.readFileSync(path).toString();
growth(code);
