function onCompleted(job, result) {}

const listeners = {
  ["global:completed"]: onCompleted
};

export default listeners;
