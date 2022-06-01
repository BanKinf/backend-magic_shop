const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

dotenv.config();

mongoose                                                                                                .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err)=> {
    console.log(err)});

app.use(cors());    
app.use(express.json());  

app.listen(process.env.PORT || 5000, ()=> {
    console.log("Backend server is running!");
});