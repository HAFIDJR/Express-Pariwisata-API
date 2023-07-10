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

const Fruits = mongoose.model("Fruits",fruitSchema);
const apple = new Fruits({
    name : "jokowi",
    rating: '0',
    review:'Rasanya Manis'
})
async function saveDb(){
    await apple.save();
} 
saveDb()