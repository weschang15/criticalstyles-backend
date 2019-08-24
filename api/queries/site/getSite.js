import { withCatch, extractErrors } from "../../../utils";

const getSite = async (_, { input: { slug } }, { models: { Site } }) => {
  const [error, site] = await withCatch(
    Site.findOne({ slug }, "_id name slug", { lean: true })
  );

  return error
    ? { ok: false, errors: extractErrors(error) }
    : { ok: true, site };
};

export default getSite;
