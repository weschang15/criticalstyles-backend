import cors from "cors";
import { getConfig } from "../../utils";
const middleware = cors(getConfig("cors"));

export default middleware;
