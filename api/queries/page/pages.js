import { getQueryInfo, withCatch } from "../../../utils";

const resolver = async (_, { input }, { models: { Page } }, info) => {
  const { siteId, skip, limit } = input;
  const query = {
    site: siteId,
  };

  const [error, [total, documents]] = await withCatch(
    Promise.all([
      Page.countDocuments({ site: siteId }),
      Page.find(query).skip(skip).limit(limit).sort({ createdAt: 1 }),
    ])
  );

  const queryInfo = getQueryInfo(total, limit);

  return error
    ? { ok: false, errors: extractErrors(error) }
    : { ok: true, documents, queryInfo };
};

export default resolver;
