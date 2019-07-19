require = require("esm")(module);
const removeFalsy = require("./utils");

describe("removeFalsy", () => {
  it("should remove all falsy values", () => {
    const testInput = [1, 0, "", null, undefined, "hello", 5, "hi", "there"];
    const expectedResult = [1, "hello", 5, "hi", "there"];
    expect(removeFalsy(testInput)).toEqual(expectedResult);
  });
});
