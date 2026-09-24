import dotenv from "dotenv";
dotenv.config();

// CLUSTER=> DATABASE => COLLECTION => DOCUMENT = NOSQL
import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("MongoDB connection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.log(`The server is running successfully on port ${PORT}`);
    });
  })
  .catch((err) => console.log("ERROC on connection mongoDb", err));
