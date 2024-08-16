import mongoose from 'mongoose';

const DB_NAME = 'Mobility-Future';
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${MONGO_URI}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`\n MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error('MongoDB connection FAILED:', error);
    process.exit(1);
  }
};

export default connectDB;
