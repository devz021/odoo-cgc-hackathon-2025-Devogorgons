import mongoose from 'mongoose';

export const connectDB = async () => {
    mongoose.connection.on('connected', () => {
        console.log('MongoDB event: connected');
    });

    mongoose.connection.on('error', (err) => {
        console.error('MongoDB event: connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB event: disconnected');
    });

    try {
        await mongoose.connect(process.env.MONGODB_URI as string, {
            serverSelectionTimeoutMS: 5000 // fail after 5 seconds if not connected
        });
        console.log('MongoDB initial connection successful');
        console.log('Connection readyState:', mongoose.connection.readyState);
    } catch (error) {
        console.error('MongoDB initial connection error:', error);
        process.exit(1);
    }
};