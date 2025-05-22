import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema(
  {
    number: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    gst: { type: String},
    password: { type: String, required: true },
    otp: { type: String },
    otpExpires: { type: Date }
  },
  {
    collection: "vendors", // Collection name in MongoDB
    timestamps: true,
  }
);


const Vendor =
  mongoose.models.Vendor || mongoose.model("Vendor", vendorSchema);

export default Vendor;
