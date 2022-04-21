import { Grammar } from "../Grammar";

describe("#Grammar", () => {
    describe(".constructor", () => {
        it("throws an error", () => {
            expect(() => new Grammar()).toThrowError();
        });
    });
});
