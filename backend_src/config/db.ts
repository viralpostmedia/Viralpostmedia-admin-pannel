import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const user = encodeURIComponent(process.env.DB_USER as string);
    const password = encodeURIComponent(process.env.DB_PASSWORD as string);
    const host = process.env.DB_HOST as string;
    const dbName = process.env.DB_NAME as string;

    const uri = `mongodb+srv://${user}:${password}@${host}/${dbName}?retryWrites=true&w=majority`;

    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
