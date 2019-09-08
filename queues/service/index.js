import createQueue from "../../shared/bull/createQueue";
import { SERVICE_QUEUE } from "../types";
import listeners from "./listeners";

const queue = createQueue(SERVICE_QUEUE, {}, listeners);

const serviceQueue = {
  queue,
  queueName: SERVICE_QUEUE
};

export { serviceQueue };
