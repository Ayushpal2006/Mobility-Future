import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { default as mongodb, ObjectId, ServerApiVersion } from "mongodb";
import cookieParser from "cookie-parser";
import connectDB from "./db/mongoose-connection.js";
import authRouter from "./routes/auth.js";
import postRouter from "./routes/postJob.js";

// Load environment variables
dotenv.config();

const app = express();

// const client = new MongoClient(process.env.MONGO_URI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

//Define Collections here
// const db = client.db("test");
// const usersCollection = db.collection("users");
// const postsCollection = db.collection("postjobs");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Routes
app.use("/api/auth", authRouter);
app.use("/api/postJob", postRouter);

// app.get("/api/posts", async (req, res) => {
//   const result = await postsCollection.find({ driver: "NA" }).toArray();
//   res.send(result);
// });

// app.post('/assignDriver', (req,res)=>{
//   const driver_id = req.body.driver_id;
//   const

//   res.sendStatus(200);
// });
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
