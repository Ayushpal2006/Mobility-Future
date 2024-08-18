import mongoose from "mongoose";

const postJobSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      match: /.+\@.+\..+/, // Basic email validation
    },
    cust_name: {
      type: String,
      required: true,
      minLength: 3,
    },
    cust_contact: {
      type: String,
      required: true,
      match: /^[0-9]+$/, // Ensures that only numbers are allowed
    },
    from_city: {
      type: String,
      required: true,
    },
    from_addr: {
      type: String,
      required: true,
    },
    to_city: {
      type: String,
      required: true,
    },
    to_addr: {
      type: String,
      required: true,
    },
    driver: {
      type: String,
      default: "",
    },
    cargo_name: {
      type: String,
      required: true,
    },
    cargo_weight: {
      type: Number,
      required: true,
      min: 0, // Ensures weight is non-negative
    },
    fare: {
      type: Number,
      required: true,
      min: 0, // Ensures fare is non-negative
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps
  }
);

const PostJob = mongoose.model("PostJob", postJobSchema);
export default PostJob;
