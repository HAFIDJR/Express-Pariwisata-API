const Item = require("../model/Item");
const Category = require("../model/category");
const Image =require("../model/image"); 
const path = require('path');
module.exports = {
    categoryPage :async(req,res)=>{
        
    },
    landingPage: async(req,res)=>{
        const item = await Item.find({},"title price country city description category")
        .populate({path : 'imageId',select :'imageUrl'})
        res.status(200).json(item);
    },
    filterByCategory :async(req,res)=>{
        try {
            const {categoryId} = req.params;
            const item = await Item.find({category:categoryId},"title price country city description category")
            .populate({path : 'imageId',select :'imageUrl'});
            res.status(200).json(item);
        } catch (error) {
            res.status(404).json([]);
        }
    },
    detailItem : async(req,res)=>{
        try {
            const {idItem} = req.params;
            const item = await Item.findById(idItem,"title price country city description")
            .populate({path : 'imageId',select :'imageUrl'});;
            res.status(200).json(item);
        } catch (error) {
            res.status(404).json({});
        }
      


    }
    ,
    showImageItem :async(req,res)=>{
        const {imageUrl} = req.params;
        const options = {
            root : path.join('public/images'),
            headers: {
                'x-timestamp': Date.now(),
                'x-sent': true
            }
        }
        res.sendFile(imageUrl,options,(err)=>{
            if(err){
                res.status(403).json({
                    message : 'Image Not Found'
                });
            }
        })
    }
}