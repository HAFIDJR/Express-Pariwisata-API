const router = require('express').Router()
const adminControler = require('../controllers/adminControlers')
const {uploudMultiple} =require("../middleware/multer");
// crud Category
router.get('/category',adminControler.viewCategory);
router.post('/addCategory',adminControler.addCategory);
router.put('/category',adminControler.editCategory);
router.delete('/category/:id',adminControler.deleteCategory);

// Crud Item
router.get('/item',adminControler.viewItem)
router.get('/item/show-image/:id',adminControler.showImageItem)
router.post('/item',uploudMultiple,adminControler.addItem)
module.exports = router;




