import dotenv from "dotenv";
dotenv.config();

// CLUSTER=> DATABASE => COLLECTION => DOCUMENT = NOSQL
import mongoose from "mongoose";
mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connecyion succeed");
    const PORT = process.env.PORT ?? 3003;
  })
  .catch((err) => console.log("ERROC on connection mongoDb", err));
