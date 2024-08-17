import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    // Reference to the booking associated with the review

    booking: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Booking",
      required: true,
    },
    // Reference to the user who wrote the review

    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Rating given by the reviewer (1 to 5 stars)

    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String },
  },
  { timestamps: true }
); 

const Review = mongoose.model("Review", reviewSchema);

export default Review;
