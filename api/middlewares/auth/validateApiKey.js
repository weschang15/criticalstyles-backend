import { Token } from "../../models";
import { decryptApiKeys } from "../../services";

export default async (req, res, next) => {
  const { apiKey } = req;
  const token = decryptApiKeys(apiKey);
  const valid = await Token.findOne({ token });

  if (!valid) {
    return res.status(403).json({
      ok: false,
      data: {
        message: "Invalid API key",
      },
    });
  }

  next();
};
