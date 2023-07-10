const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema
const itemSchema = new mongoose.Schema({
  title: {
    type :String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  country:{
    type:String,
    default:"indonesia"
  },
  city:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  imageId:[{
    type:ObjectId,
    ref:'Image'
  }],
  category:{
    type:ObjectId,
    ref:'Category'
  }
});

module.exports = mongoose.model("Item", itemSchema);