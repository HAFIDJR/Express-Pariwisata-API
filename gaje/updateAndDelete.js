const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/db-mongose");
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Data not allowed empty"],
  },
  rating: {
    type: Number,
    min: [6, "Too few eggs"],
    max: 12,
  },
  review: String,
});

const Fruits = mongoose.model("Fruits", fruitSchema);
async function updatevalueDb() {
  try {
    await Fruits.updateOne(
      { _id: "64918e6c3cc0ee1d2a813ba0" },
      { name: "semongko garing" }
    );
    console.log('Update succes');
  } catch (error) {
    console.log(error);
  }
}
updatevalueDb();
// async function deletevalueDb() {
//     try {
//         await Fruits.deleteOne({name : 'jokowi'})
//         console.log('Delete Succes')
//     } catch (error) {
//         console.log('Error');
//     }
// }
// // updatevalueDb()
// deletevalueDb()
