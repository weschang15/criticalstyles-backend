import requireUser from "../auth/requireUser";

const mutations = {
  Mutation: {
    createSite: requireUser(async (resolve, parent, args, context, info) => {
      return resolve(parent, args, context, info);
    })
  }
};

export default mutations;
