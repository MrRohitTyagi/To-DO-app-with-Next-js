import mongoose from "mongoose";

export async function connectDB() {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_STRING, {
      dbName: "next-tutorial",
    });

    console.log("Connected successfullt", connection.host);
  } catch (error) {
    console.log("error", error);
  }
}
