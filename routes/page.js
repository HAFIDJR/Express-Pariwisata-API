const router = require('express').Router()
const pageControler = require('../controllers/pageControlers')

router.get('/showLandingPage',pageControler.landingPage);
router.get('/showLandingPage/:categoryId',pageControler.filterByCategory);
router.get('/images/:imageUrl',pageControler.showImageItem);
router.get('/detailItem/:idItem',pageControler.detailItem);

module.exports = router;