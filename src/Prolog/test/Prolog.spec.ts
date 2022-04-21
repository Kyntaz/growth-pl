import { Prolog } from "../Prolog";

describe("#Prolog", () => {
    describe(".constructor", () => {
        it("throws an error", () => {
            expect(() => new Prolog()).toThrowError();
        });
    });
});
