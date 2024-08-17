import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    // Reference to the client making the booking
    client: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Reference to the driver being booked

    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Reference to the truck being booked

    truck: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Truck",
      required: true,
    },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    status: {
      type: String,
      enum: ["pending", "accepted", "completed", "canceled"],
      default: "pending",
    },
  },
  { timestamps: true }
); // Automatically adds createdAt and updatedAt fields

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;
