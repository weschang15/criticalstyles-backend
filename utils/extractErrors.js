const extractErrors = e => {
  if (e instanceof Error) {
    return [{ path: "name", message: e.message || "Something went wrong" }];
  }
};

export default extractErrors;
