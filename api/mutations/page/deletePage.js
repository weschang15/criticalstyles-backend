import { extractErrors, withCatch } from "../../../utils";

export default async (_, { input }, { models: { Page } }, info) => {
  const { _id } = input;
  const [error, result = {}] = await withCatch(Page.deleteOne({ _id }));

  const { deletedCount } = result;

  const response = error
    ? { ok: false, errors: extractErrors(error) }
    : { ok: Boolean(deletedCount) };

  return response;
};
