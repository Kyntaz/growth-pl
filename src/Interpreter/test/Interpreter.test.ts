import { Interpreter } from "../Interpreter";

describe("#Interpreter", () => {
    describe(".constructor", () => {
        it("throws an error", () => {
            expect(() => new Interpreter()).toThrowError();
        });
    });
});
