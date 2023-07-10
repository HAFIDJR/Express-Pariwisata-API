const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/db-mongose");
const fruitSchema = new mongoose.Schema({
  name:{
    type:String,
    required : [true , "Data not allowed empty"]
  },
  rating: {
    type:Number,
    min: [6, 'Too few eggs'],
    max: 12
  },
  review: String,
});

const peopleSchema = new mongoose.Schema({
    nama:{
      type:String,
      required : [true , "Data not allowed empty"]
    },
    umur: {
      type:Number,
    },
    favoriteFruits: fruitSchema,
});

const Fruits = mongoose.model("Fruits", fruitSchema);
const People = mongoose.model("People",peopleSchema)
const fruitsDhuku = new Fruits({
    name : 'DUKU',
    rating: 6,
    riview:'Rasanya Manis'
})
const people = new People({
    nama : 'Angga',
    age : 25,
    favoriteFruits:fruitsDhuku
})
async function saveDb(){
    await fruitsDhuku.save();
    await people.save()
} 
saveDb()