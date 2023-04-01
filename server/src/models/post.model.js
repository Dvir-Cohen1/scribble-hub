import { Schema, model } from "mongoose";

const postSchema = new Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  tags: [{ type: String }],
  image: { type: String },
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  createdAt: { type: Date, immutable: true, default: new Date() },
  modifiedAt: { type: Date },
});

postSchema.pre("save", function (next) {
  this.modifiedAt = new Date();
  next();
});

const Post = model("Post", postSchema);

export default Post;
