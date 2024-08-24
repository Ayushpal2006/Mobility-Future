import mongoose from "mongoose";

const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mobility";
  try {
    const connectionInstance = await mongoose.connect(
      `${MONGO_URI}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    
    console.log("MONGO_URI:", MONGO_URI); // Debug log
    console.log(
      `\n MongoDB connected! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("MongoDB connection FAILED:", error);
    process.exit(1);
  }
};

export default connectDB;