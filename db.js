// use to connect the mongoose with the nodejs 
const mongoose = require('mongoose');
const dns = require('dns');
require('dotenv').config();


// mongo db url 
const mongourl = process.env.LOCALURL;
// const mongoURL = "mongodb+srv://tanishjassal1994_db_user:cRtfmR7b3MenRE31@cluster0.vwlz3cu.mongodb.net/?appName=Cluster0"
mongoose.connect(mongourl);

// get the default connection
const db = mongoose.connection;

// define the event listeners



db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server');
});


db.on('error', (err) => {
    console.log('MongoDB connection error:', err);
});

// export the database connection
module.exports = db;