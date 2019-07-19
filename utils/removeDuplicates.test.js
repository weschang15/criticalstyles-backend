require = require("esm")(module);
const removeDuplicates = require("./utils");

describe("removeDuplicates", () => {
  it("should remove duplicate values", () => {
    const testInput = [1, 2, "hi", 2, 1, "hi", 3, "hello", 5, "hi", "there"];
    const expectedResult = [1, 2, "hi", 3, "hello", 5, "there"];
    expect(removeDuplicates(testInput)).toEqual(expectedResult);
  });
});
