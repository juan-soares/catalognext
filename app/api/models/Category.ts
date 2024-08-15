import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
  collection: { type: String, required: true },
});

const Category = mongoose.model("Categories", categorySchema);

export default Category;
