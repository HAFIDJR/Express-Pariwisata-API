const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/db-mongose");
const fruitSchema = new mongoose.Schema({
  name:{
    type:String,
    required : [true , "Data not allowed empty"]
  },
  rating: Number,
  review: String,
});

const Fruit = mongoose.model("Fruits",fruitSchema);
// accces 

async function findvalueDb() {
    // let a = await Fruit.find({})
    const a = await Fruit.findOne()
    console.log(a)
    // if we want to find one value, we can acces it with syntak

}
findvalueDb()