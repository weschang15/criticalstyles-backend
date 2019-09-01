import { getQueryInfo, withCatch } from "../../../utils";

export default async (_, { filter }, { models: { Site }, account }, info) => {
  const { limit, after } = filter;
  const query = {
    account
  };

  if (after) {
    query.createdAt = {
      $lt: after
    };
  }

  const [error, [total, documents]] = await withCatch(
    Promise.all([
      Site.countDocuments({ account }),
      Site.find(query)
        .limit(10)
        .sort({ createdAt: -1 })
    ])
  );

  const queryInfo = getQueryInfo(total, 10);

  return error
    ? { ok: false, errors: extractErrors(error) }
    : { ok: true, documents, queryInfo };
};
