import mongoose from "mongoose";

const truckSchema = new mongoose.Schema(
  {
    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    licensePlate: { type: String, required: true },
    capacity: { type: Number, required: true },
    availability: { type: Boolean, default: true },
  },
  { timestamps: true }
); 

const Truck = mongoose.model("Truck", truckSchema);

export default Truck;
