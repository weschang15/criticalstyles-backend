import { Notification } from "../../api/models";
import createPubsub from "../../shared/redis/createPubSub";
import { NOTIFICATION_ADDED } from "../../shared/redis/events";
const pubsub = createPubsub();

async function onCompleted(job, result) {
  const { accountId, pageUrl, key } = JSON.parse(result);

  const newNotification = new Notification({
    account: accountId,
    data: {
      ccssKey: key,
      pageUrl
    },
    message: `Critical CSS for ${escape(pageUrl)} successfully generated.`
  });

  const notification = await newNotification.save();

  pubsub.publish(NOTIFICATION_ADDED, {
    accountId,
    notification
  });
}

const listeners = {
  ["global:completed"]: onCompleted
};

export default listeners;
