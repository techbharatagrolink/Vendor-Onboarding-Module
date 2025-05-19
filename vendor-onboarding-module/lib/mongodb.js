import mongoose from "mongoose";

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    console.log("MongoDB: Already connected");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("MongoDB: MONGODB_URI is not defined in .env");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB: Connected successfully");
  } catch (error) {
    console.error("MongoDB: Connection error:", error.message);
    throw error;
  }
};
