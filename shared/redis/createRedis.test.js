require = require("esm")(module);
const Redis = require("ioredis-mock");
const { getConfig } = require("../../utils");

const createRedisMock = jest.fn();
createRedisMock.mockImplementation((opts = {}) => {
  const config = getConfig("redis");
  return new Redis({ ...config, ...opts, data: {} });
});

describe("createRedis", () => {
  beforeEach(() => {
    createRedisMock.mockClear();
  });

  it("should return one instance of Redis", () => {
    createRedisMock();
    expect(createRedisMock).toHaveReturnedTimes(1);
    expect(createRedisMock.mock.results[0].value).toBeInstanceOf(Redis);
  });

  it("should allow custom configuration parameters", () => {
    const opts = { password: "password" };

    createRedisMock(opts);
    expect(createRedisMock).toBeCalledWith(opts);
    expect(createRedisMock).toHaveReturnedTimes(1);
    expect(createRedisMock.mock.results[0].value).toBeInstanceOf(Redis);
  });
});
