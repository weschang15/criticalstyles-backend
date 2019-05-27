import createRedis from "../../shared/redis/createRedis";

class Cache {
  constructor({ keyPrefix } = {}) {
    if (keyPrefix && typeof keyPrefix !== "string") {
      throw new Error("Parameter `keyPrefix` must be a string");
    }

    this.keyPrefix = keyPrefix || null;
    const options = this.keyPrefix ? { keyPrefix } : {};
    this.redis = createRedis(options);
  }

  get(key) {
    if (!key) {
      throw new Error("Parameter `key` required for retrieving Redis record");
    }

    return this.redis.get(key);
  }

  set(key, value, expireyMode, expireTime) {
    if (!key || !value) {
      throw new Error(
        "Parameters `key` and `value` are required to set a Redis record"
      );
    }

    if (typeof value !== "string") {
      throw new Error("Parameter `value` must be a string.");
    }

    const permittedModes = ["ex", "px", "nx", "xx"];

    if (
      typeof expireyMode !== "string" ||
      !permittedModes.includes(expireyMode)
    ) {
      throw new Error("Invalid Parameter `expireyMode`");
    }

    return this.redis.set(key, value, expireyMode, expireTime);
  }
}

export default Cache;
