import { createModel, Types, _Schema } from "./Utils";

const TokenSchema = new _Schema({
  token: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  secret: {
    type: String,
    unique: true,
    trim: true,
  },
  limit: {
    type: Number,
    default: 100,
  },
  usage: {
    count: {
      type: Number,
      default: 0,
    },
    requests: [
      {
        endpoint: String,
        timestamp: Date,
      },
    ],
  },
  account: { type: Types.ObjectId, ref: "Account" },
  createdBy: { type: Types.ObjectId, ref: "User" },
});

TokenSchema.pre("save", function (next) {
  this.secret = this.secret.substring(0, 6);
  return next();
});

export default createModel("Token", TokenSchema);
