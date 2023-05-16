import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.dbURL);

const db = mongoose.connection;
db.on('error', err => {
    console.error('MongoDB connection error:', err);
});

db.once('open', () => {
    console.log('MongoDB connected!');
});



export default db;


