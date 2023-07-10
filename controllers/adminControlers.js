const Category = require("../model/category");
const Item = require("../model/Item");
const Image = require("../model/image");

module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dasboard/view_dashboard");
  },
  viewCategory: async (req, res) => {
    const category = await Category.find();
    res.render("admin/category/view_category.ejs", { category });
  },
  addCategory: async (req, res) => {
    try {
      const { name } = req.body;
      await Category.create({ name });
      res.redirect("/admin/category");
    } catch (error) {
      res.redirect("/admin/category");
    }
  },
  editCategory: async (req, res) => {
    const { id, name } = req.body;
    const category = await Category.findOne({ _id: id });
    category.name = name;
    await category.save();
    res.redirect("/admin/category");
  },
  deleteCategory: async (req, res) => {
    const { id } = req.params;
    await Category.deleteOne({ _id: id });
    res.redirect("/admin/category");
  },
  viewItem: async (req, res) => {
    try {
      const item = await Item.find()
      .populate({path :'imageId',select:'id imageUrl'})
      .populate({path :'category',select:'id name'})
      const category = await Category.find();
      res.render("admin/item/view_item.ejs", { category,item,action:'view'});
    } catch (error) {
      res.redirect("/admin/item");
    }
  },
  addItem: async (req, res) => {
    try {
      const { categoryId, title, price, city, about } = req.body;
      console.log(req.files);
      if (req.files.length > 0) {
        const category = await Category.findOne({ _id: categoryId });
        const newItem = {
          category: category._id,
          title,
          price,
          description: about,
          city,
        };
        const item = await Item.create(newItem);
        category.itemId.push({ _id: item._id });
        await category.save();
        for (let i = 0; i < req.files.length; i++) {
          const imageSave = await Image.create({
            imageUrl: `images/${req.files[i].filename}`,
          });
          item.imageId.push({ _id: imageSave._id });
          await item.save();
        }
        
        res.redirect('/admin/item');
      }
    } catch (error) {
      console.log(error);
      res.redirect("/admin/item");
    }
  },
  showImageItem:async(req,res)=>{
    try {
      const {id} = req.params
      const item = await Item.findOne({_id: id})
      .populate({path :'imageId',select:'id imageUrl'})
      const category = await Category.find();
      res.render("admin/item/view_item.ejs", {item,action:'show image'});
    } catch (error) {
      console.log(error) 
    }
   

  }
  
};
