const query = async (parent, args, { models: { Account, Site } }) => {
  const [sites, { users }] = await Promise.all([
    Site.find({ account: parent._id }, { lean: true }),
    Account.findById(parent._id, "users").lean()
  ]);

  return { sites: sites.length, users: users.length };
};

export default query;
