const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');

dotenv.config();

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
.then((res) => {
    console.log(`Connected to MongoDB. Database: ${res.connections[0].name}`);
}).catch((err) => {
    console.log('Error connecting to MongoDB');
})

app.use(express.json());

app.use('/api/user', authRoute);

app.listen(5000);