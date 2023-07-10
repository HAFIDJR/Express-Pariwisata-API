const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null,"./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const uploudMultiple = multer({
  storage: storage,
  limits: { fileSize: 2000000 },
}).array('image')
module.exports = { uploudMultiple };
