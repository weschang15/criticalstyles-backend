import { Page } from "../../../api/models";
import createPubsub from "../../../shared/redis/createPubSub";
import { PAGE_UPDATED } from "../../../shared/redis/events";

const pubsub = createPubsub();

async function onCompleted(job, result) {
  const pageId = JSON.parse(result);
  const page = await Page.findById(pageId);

  pubsub.publish(PAGE_UPDATED, {
    pageUpdated: page.toObject(),
    pageId: page._id
  });
}

const listeners = {
  ["global:completed"]: onCompleted
};

export default listeners;
