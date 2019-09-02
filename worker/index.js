import queues from "./queues";

export function initWorker() {
  queues.forEach(({ name, process, queue }) => {
    queue.process(name, 5, process);
  });
}
