import createPubsub from "../../../shared/redis/createPubSub";
const pubsub = createPubsub();

async function onCompleted(job, result) {}

const listeners = {
  ["global:completed"]: onCompleted
};

export default listeners;
