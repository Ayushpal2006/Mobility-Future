import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import bcrypt from "bcrypt";
import env from "dotenv";
import { default as mongodb, ObjectId, ServerApiVersion } from "mongodb";

let MongoClient = mongodb.MongoClient;

const app = express();
const saltRounds = 10;
env.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

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

//Listening on 4000
app.listen(4000, () => {
  console.log("Listening on 4000.");
});
