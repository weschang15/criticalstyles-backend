import { getQueryInfo, withCatch } from "../../../utils";

export default async (_, { filter }, { models: { Site }, account }, info) => {
  const { limit, skip } = filter;
  const query = {
    account,
  };

  const [error, [total, documents]] = await withCatch(
    Promise.all([
      Site.countDocuments({ account }),
      Site.find(query).skip(skip).limit(limit).sort({ createdAt: -1 }),
    ])
  );

  const queryInfo = getQueryInfo(total, limit);

  return error
    ? { ok: false, errors: extractErrors(error) }
    : { ok: true, documents, queryInfo };
};
