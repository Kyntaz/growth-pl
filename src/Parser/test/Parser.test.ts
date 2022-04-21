import { Parser } from "../Parser";

describe("#Parser", () => {
    describe(".constructor", () => {
        it("throws an error", () => {
            expect(() => new Parser()).toThrowError();
        });
    });
});