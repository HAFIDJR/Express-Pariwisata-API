const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/');
    mongoose.connect('mongodb://127.0.0.1:27017/db-mongose');
    const fruitSchema = new mongoose.Schema({
        name : String,
        rating : Number,
        review:String
    })

    const Fruits = mongoose.model("Fruits",fruitSchema)
    const apple = new Fruits({
        name : "Apple",
        rating: '8',
        review:'Rasanya Manis'
    })
    const maango = new Fruits({
        name : "semangka",
        rating: '8',
        review:'Rasanya Kecut'
    })
    async function saveDb(){
        await apple.save();
        await maango.save()
    } 
    saveDb()


