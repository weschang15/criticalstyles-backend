// Database connection, import the module only for its side effects
import { app, http } from "./api";
import "./api/services/db";

const server = http.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
