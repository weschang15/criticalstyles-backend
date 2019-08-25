import { DatabaseError } from "../api/models";
import { isDev } from "../config";

const extractErrors = e => {
  if (e.name === "ValidationError") {
    return e.inner.map(({ path, message }) => ({ path, message }));
  }

  if (e instanceof DatabaseError) {
    if ("errors" in e) {
      return Object.values(e.errors).map(err => ({
        path: err.path,
        message: err.message
      }));
    }
  }

  if (e instanceof Error) {
    return [
      { path: "name", message: isDev() ? e.message : "Something went wrong" }
    ];
  }
};

export default extractErrors;
