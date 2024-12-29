// we will be defining schemas here !

const { default: mongoose, mongo } = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      req: true,
      unique: true,
    },
    password: {
      type: String,
      req: true,
    },
    avatar: {
      type: String,
      default: "/staticAssets/images/userAvatar.png",
    },
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      req: true,
    },
    desc: String,
    images: [String],
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      req: true,
    },
    desc: String,
    images: [String],
    author: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    eventDate: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const User = mongoose.models?.User || mongoose.model("User", userSchema);
const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
const Event = mongoose.models?.Event || mongoose.model("Event", eventSchema);

export { User, Post, Event };
