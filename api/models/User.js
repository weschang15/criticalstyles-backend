import mongoose from "mongoose";
import { _Schema, Types } from "./Schema";

const UserSchema = new _Schema({
  firstName: {
    type: String,
    required: [true, "A first name must be provided."],
    trim: true
  },
  lastName: {
    type: String,
    required: [true, "A last name must be provided."],
    trim: true
  },
  email: {
    type: String,
    required: [true, "An email must be provided."],
    trim: true,
    unique: true,
    index: true
  },
  password: {
    type: String,
    required: [true, "A password must be provided"],
    minlength: 8,
    maxlength: 1024
  },
  sites: [{ type: Types.ObjectId, ref: "Site" }]
});

export default mongoose.model("User", UserSchema);
