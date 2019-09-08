import { createModel, Types, _Schema } from "./Utils";

const NotificationSchema = new _Schema({
  message: {
    type: String,
    trim: true,
    required: true
  },
  read: {
    type: Boolean,
    required: true,
    default: false
  },
  account: { type: Types.ObjectId, ref: "Account" }
});

export default createModel("Notification", NotificationSchema);
