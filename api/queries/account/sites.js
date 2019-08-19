const query = async (parent, { sf }, { models: { Account } }) => {
  // sf - Filter input (limit, after)
  const { sites } = await Account.findById(parent._id, "sites")
    .populate({ path: "sites" })
    .lean();

  return sites;
};

export default query;
