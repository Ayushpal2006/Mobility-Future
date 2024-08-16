
import mongoose from "mongoose"

const mongoURI = process.env.MONGO_URI



// Connect to MongoDB
mongoose.connect(`${mongoURI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Handle connection events
mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to " + `${mongoURI}`);
});



mongoose.connection.on("error", (err) => {
  console.log("Mongoose connection error: " + err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});

module.exports = mongoose.connection;