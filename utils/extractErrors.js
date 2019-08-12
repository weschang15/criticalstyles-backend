import { DatabaseError } from "../api/models";

const extractErrors = e => {
  if (e instanceof DatabaseError) {
    if ("errors" in e) {
      return Object.values(e.errors).map(err => ({
        path: err.path,
        message: err.message
      }));
    }
  }

  if (e instanceof Error) {
    return [{ path: "name", message: e.message || "Something went wrong" }];
  }
};

export default extractErrors;
