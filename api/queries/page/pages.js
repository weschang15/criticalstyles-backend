import { getQueryInfo, withCatch } from "../../../utils";

const resolver = async (_, { input }, { models: { Page } }, info) => {
  const { siteId, after } = input;
  const query = {
    site: siteId
  };

  if (after) {
    query.createdAt = {
      $lt: after
    };
  }

  const [error, [total, documents]] = await withCatch(
    Promise.all([
      Page.count({ site: siteId }),
      Page.find(query)
        .limit(10)
        .sort({ createdAt: -1 })
    ])
  );

  const queryInfo = getQueryInfo(total, 10);

  return error
    ? { ok: false, errors: extractErrors(error) }
    : { ok: true, documents, queryInfo };
};

export default resolver;
