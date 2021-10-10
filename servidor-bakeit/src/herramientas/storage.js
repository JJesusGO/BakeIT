const multer = require('multer');
const path = require('path')

const storageAvatar = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/media/avatars');
    },
    filename: function(req, file, cb) {
        cb(null, "img-" + Date.now() + path.extname(file.originalname));
    }
})
const uploadAvatar = multer({ storage: storageAvatar })


const storageProduct = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.join(__dirname, '../../public/data/products'));
    },
    filename: function(req, file, cb) {
        cb(null, uniqid() + path.extname(file.originalname));
    }
})
const uploadProduct = multer({ storage: storageProduct });

module.exports = {
    uploadAvatar,
    uploadProduct
}