import mongoose from 'mongoose';

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    if (!process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_HOST || !process.env.DB_NAME) {
      console.error('CRITICAL ERROR: Missing MongoDB environment variables. Please check your Vercel Environment Variables or local .env file.');
      throw new Error('Missing MongoDB environment variables');
    }

    const user = encodeURIComponent(process.env.DB_USER as string);
    const password = encodeURIComponent(process.env.DB_PASSWORD as string);
    const host = process.env.DB_HOST as string;
    const dbName = process.env.DB_NAME as string;

    const uri = `mongodb+srv://${user}:${password}@${host}/${dbName}?retryWrites=true&w=majority`;

    const conn = await mongoose.connect(uri);
    isConnected = !!conn.connections[0].readyState;
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    // Do NOT process.exit(1) in a serverless environment (Vercel)
    throw error; 
  }
};

export default connectDB;
