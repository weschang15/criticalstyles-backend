const query = async (parent, args, { models: { Account } }) => {
  const { sites, users } = await Account.findById(
    parent._id,
    "sites users"
  ).lean();

  return { sites: sites.length, users: users.length };
};

export default query;
