const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const userRouter = require('./routes/userRoutes');

const app = express();
const port = 2000; // Change as needed

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/Assignment8');
app.use(cors()); 

app.use(express.json());

// Use the user router
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});