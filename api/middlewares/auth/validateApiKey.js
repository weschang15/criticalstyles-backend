import { Token } from "../../models";
import { decryptApiKeys } from "../../services";

export default async (req, res, next) => {
  try {
    const { apiKey } = req;
    const { token } = decryptApiKeys(apiKey);
    const valid = await Token.findOne({ token });

    if (!valid) {
      throw new Error("Invalid API key");
    }

    next();
  } catch (error) {
    return res.status(403).json({
      ok: false,
      data: {
        message: error.message,
      },
    });
  }
};
