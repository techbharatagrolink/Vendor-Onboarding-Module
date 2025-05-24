import mongoose from 'mongoose';

const QuerySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters long'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Please enter a valid email address'],
  },
  mobile: {
    type: String,
    trim: true,
    match: [/^\d{10}$/, 'Please enter a valid 10-digit mobile number'],
    default: null,
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    minlength: [10, 'Message must be at least 10 characters long'],
  },
  status: {
    type: String,
    enum: ['pending', 'resolved', 'closed'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Query || mongoose.model('Query', QuerySchema);