const express = require('express');
const cors = require('cors');
require('./db');
const mongoose = require('mongoose');

const Food = mongoose.model('Food',{
    name:String,
    quantity:Number,
    location:String
});

const app = express();
app.use(cors());
app.use(express.json());

app.post("/food", async(req,res)=>{
    const food = new Food(req.body);
    await food.save();
    res.send("Saved");
});

app.get("/food", async(req,res)=>{
    const foods = await Food.find();
    res.json(foods);
});

app.listen(5000, ()=>console.log("Server started on 5000"));
