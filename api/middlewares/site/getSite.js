import requireUser from "../auth/requireUser";

export default requireUser((resolve, parent, args, context, info) => {
  return resolve(parent, args, context, info);
});
