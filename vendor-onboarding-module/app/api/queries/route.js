import mongoose from 'mongoose';
import Query from '../../../models/Query';

export async function POST(req) {
  try {
    // Connect to MongoDB
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(process.env.MONGODB_URI, {
        dbName: 'bharat_agrolink',
      });
    }

    const body = await req.json();
    const { name, contact1, contact2, message, createdAt } = body;

    // Create new query document
    const query = new Query({
      name,
      email: contact1,
      mobile: contact2 || null,
      message,
      createdAt: new Date(createdAt),
    });

    // Save to MongoDB
    const savedQuery = await query.save();

    return new Response(JSON.stringify({
      success: true,
      data: savedQuery,
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error saving query:', error);
    return new Response(JSON.stringify({
      error: error.message || 'Internal server error',
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}