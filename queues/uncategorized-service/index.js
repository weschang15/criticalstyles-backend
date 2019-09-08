import createQueue from "../../../shared/bull/createQueue";
import { UNCATEGORIZED_SERVICE_QUEUE } from "../types";
import listeners from "./listeners";

const queue = createQueue(UNCATEGORIZED_SERVICE_QUEUE, {}, listeners);

const uncategorizedServiceQueue = {
  queue,
  queueName: UNCATEGORIZED_SERVICE_QUEUE
};

export { uncategorizedServiceQueue };
