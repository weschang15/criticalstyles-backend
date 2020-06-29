import crypto from "crypto";

export default class Encrypter {
  constructor({ algo } = {}) {
    this.algo = algo || "aes-256-ctr";
    this.secret = crypto.randomBytes(32);
  }

  encrypt({ value }) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(
      this.algo,
      Buffer.from(this.secret),
      iv
    );

    const encrypted = Buffer.concat([cipher.update(value), cipher.final()]);
    return iv.toString("hex") + ":" + encrypted.toString("hex");
  }

  decrypt({ value }) {
    const parts = value.split(":");
    const iv = Buffer.from(parts.shift(), "hex");
    const encrypted = Buffer.from(parts.join(":", "hex"));

    const decipher = crypto.createDecipheriv(this.algo, this.secret, iv);

    const decrypted = Buffer.concat([
      decipher.update(encrypted),
      decipher.final(),
    ]);
    return decrypted.toString();
  }
}
