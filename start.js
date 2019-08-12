// Database connection, import the module only for its side effects
import "./api/services/db";

import { app, http } from "./api";

const server = http.listen(app.get("port"), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
