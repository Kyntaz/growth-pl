import { Runtime } from "../Runtime";

describe("#Runtime", () => {
    describe(".constructor", () => {
        it("throws an error", () => {
            expect(() => new Runtime()).toThrowError();
        });
    });
});
