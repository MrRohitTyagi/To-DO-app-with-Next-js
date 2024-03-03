import mongoose from "mongoose";

export async function connectDB() {
  console.log(
    `%c process.env.mogo `,
    "color: green;border:1px solid green",
    process.env.MONGO_STRING
  );
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_STRING, {
      dbName: "next-tutorial",
    });

    console.log("Connected successfullt", connection.host);
  } catch (error) {
    console.log("error", error);
  }
}
