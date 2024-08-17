import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import { default as mongodb, ObjectId, ServerApiVersion } from "mongodb";

import connectDB from "./db/mongoose-connection.js";
import authRouter from "./routes/auth.js";

// Load environment variables
dotenv.config();

let MongoClient = mongodb.MongoClient;

const app = express();

const saltRounds = 10;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Routes
app.use("/", authRouter);

const client = new MongoClient(process.env.MONGO_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get('/')

//Define Collections here
const db = client.db("MobilityFuture");
const usersCollection = db.collection("users");

// Starting the server
const PORT = process.env.PORT || 4000;

// Connect to MongoDB

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
