import Queue from "bull";
import createRedis from "../redis/createRedis";

const client = createRedis();
const subscriber = createRedis();

function createQueue(qName, qOptions = {}, listeners) {
  if (!qName) {
    throw new Error("Cannot create queue without name.");
  }
  const queue = new Queue(qName, {
    createClient: function(type) {
      switch (type) {
        case "client":
          return client;
        case "subscriber":
          return subscriber;
        default:
          return createRedis();
      }
    },
    ...qOptions
  });

  // create queue event listeners here
  // queue.on("failed", () => {});
  if (listeners) {
    Object.entries(listeners).forEach(([event, func]) => {
      queue.on(event, func);
    });
  }

  return queue;
}

export default createQueue;
