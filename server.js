const express = require('express');
const dotenv = require('dotenv');
dotenv.config({
    path: './config/config.env'
})

// Route Imports
const transactionsRoute = require('./routes/transactionsRoute')
const app = express();

// Middleware
app.use(express.json());
app.use('/api/v1/transactions', transactionsRoute)



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`App is working on PORT ${PORT}`))