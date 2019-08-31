const resolver = async (parent, args, { models: { User }, user }) => {
  const { accounts } = await user.populate("accounts").execPopulate();

  return accounts;
};

export default resolver;
