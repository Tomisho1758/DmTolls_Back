const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../cloudinary/cloudinary');

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'DMTools', // Optional - specify a folder in Cloudinary where you want to store the files
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif'] // Optional - specify allowed file formats
  }
});

const upload = multer({ storage: storage });

module.exports = upload;