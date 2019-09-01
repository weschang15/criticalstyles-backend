import { extractErrors, withCatch } from "../../../utils";

export default async (_, { input }, { Site }, info) => {
  const { _id } = input;
  const [error, result] = await withCatch(Site.deleteOne({ _id }));

  const response = err
    ? { ok: false, errors: extractErrors(error) }
    : { ok: result.deletedCount };

  return response;
};
