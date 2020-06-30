import requireAccountOwner from "../auth/requireAccountOwner";
import requireUser from "../auth/requireUser";

const middleware = requireUser(
  requireAccountOwner(async (resolve, parent, args, context, info) =>
    resolve(parent, args, context, info)
  )
);

export default middleware;
