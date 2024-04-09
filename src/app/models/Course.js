const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  name: { type: String, default: "Hoc lap trinh" },
  description: { type: String, default: "Welcome to our programming course" },
  image: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Kim_Jennie_%28%EA%B9%80%EC%A0%9C%EB%8B%88%29_05.jpg/375px-Kim_Jennie_%28%EA%B9%80%EC%A0%9C%EB%8B%88%29_05.jpg",
  },
  slug: { type: String, default: "???", maxlength: -1 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  videoId: { type: String, default: "uPYlEFagLYM" },
  buff: Buffer,
});

module.exports = mongoose.model("Course", Course);
