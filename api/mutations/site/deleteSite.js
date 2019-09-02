import { extractErrors, withCatch } from "../../../utils";

export default async (_, { input }, { models: { Page, Site } }, info) => {
  const { _id } = input;
  const [error, [ds, ps]] = await withCatch(
    Promise.all([Site.deleteOne({ _id }), Page.deleteMany({ site: _id })])
  );

  const count = ds.deletedCount + ps.deletedCount;

  const response = error
    ? { ok: false, errors: extractErrors(error) }
    : { ok: Boolean(count) };

  return response;
};
