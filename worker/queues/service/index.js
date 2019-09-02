import createQueue from "../../../shared/bull/createQueue";
import { SERVICE_QUEUE } from "../types";
import listeners from "./listeners";
import process from "./process";

const queue = createQueue(SERVICE_QUEUE, {}, listeners);

const serviceQueue = {
  name: SERVICE_QUEUE,
  process,
  queue
};

export { serviceQueue };
