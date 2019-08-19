const query = async (parent, { uf }, { models: { Account } }) => {
  // uf - Filter input (limit, after)
  const { users } = await Account.findById(parent._id, "users", {
    lean: true
  }).populate({ path: "users", select: "-password" });

  return users;
};

export default query;
