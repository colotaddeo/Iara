import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: "dvqscievu",
    api_key: "854818866781352",
    api_secret: "S3AII2Api56P0plGeaJlx6gImoo"
})

export const uploadImageCloudinary = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'imagenes',
        width: 350, 
        height: 350,
        crop: "fill"
    })
}

export const deleteImageCloudinary = async id => {
    return await cloudinary.uploader.destroy(id);
}