import { withCatch } from "../../../utils";

const query = async (parent, args, { models: { Site } }, info) => {
  const { _id } = parent;
  const [error, { pages }] = await withCatch(
    Site.findById(_id, "pages").populate("pages")
  );

  return pages;
};

export default query;
