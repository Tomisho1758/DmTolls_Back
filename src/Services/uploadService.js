const cloudinary = require("../utils/cloudinary/cloudinary");
const {Upload} = require("../DataBase/dataBase");
const uploadService ={
    dbimage: async (file)=>{
        try {
            const result = await cloudinary.uploader.upload(file.path); // Upload file to Cloudinary
            const url = result.secure_url; // Get the secure URL of the uploaded file
            console.log(url); // Log the URL to verify
            const avatar = await Upload.create({url})
            return url;
        } catch (error) {
            console.error('Error uploading image to Cloudinary:', error);
            throw new Error('Failed to upload image to Cloudinary');
        }
    }
}

module.exports = uploadService;