import { getQueryInfo, withCatch } from "../../../utils";

export default async (_, { input }, { models: { Token }, account }) => {
  const { limit, skip } = input;
  const query = {
    account,
  };

  const [error, [total, documents]] = await withCatch(
    Promise.all([
      Token.countDocuments({ account }),
      Token.find(query).skip(skip).limit(limit).sort({ createdAt: -1 }),
    ])
  );

  const queryInfo = getQueryInfo(total, limit);

  return error
    ? { ok: false, errors: extractErrors(error) }
    : { ok: true, documents, queryInfo };
};
