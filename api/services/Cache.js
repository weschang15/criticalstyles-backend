import createRedis from "../../shared/redis/createRedis";

/**
 * Class Cache
 * Responsible for interacting with IORedis and providing basic get/set methods
 */
class Cache {
  /**
   *
   * @param {Object=} settings Optional parameter
   * @param {string} settings.keyPrefix Optional parameter used for namespacing Redis Keys
   */
  constructor({ keyPrefix } = {}) {
    if (keyPrefix && typeof keyPrefix !== "string") {
      throw new Error("Parameter `keyPrefix` must be a string");
    }

    this.keyPrefix = keyPrefix || null;
    const options = this.keyPrefix ? { keyPrefix } : {};
    this.redis = createRedis(options);
  }

  /**
   * Retrieve a Redis record specified by key
   *
   * @param {string} key Redis record key
   * @return {string|null} value of record
   */
  get(key) {
    if (!key) {
      throw new Error("Parameter `key` required for retrieving Redis record");
    }

    return this.redis.get(key);
  }

  /**
   *
   * @param {string} key Identifier for Redis record value
   * @param {string} value Value for Redis record, denoted by key
   * @param {string=} [expireyMode=ex] Expirey mode
   * @param {number=} [expireTime=30] Expirey time
   */
  set(key, value, expireyMode = "ex", expireTime = 30) {
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
