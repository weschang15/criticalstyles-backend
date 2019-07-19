require = require("esm")(module);
const config = require("../../config");
const getConfig = require("./utils");

describe("getConfig", () => {
  it("should retrieve environment specific settings", () => {
    const { redis } = config;
    expect(getConfig("redis")).toEqual(redis);
  });

  it("should throw an error if config does not exist", () => {
    expect(() => getConfig("aws")).toThrow();
    expect(() => getConfig("aws")).toThrowError(
      new Error("Config for component 'aws' does not exist")
    );
  });
});
