const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: "db9ran1gx",
  api_key: "366762442723847",
  api_secret: "Kl9DWK52t5mq6b6H6cDmpU6LJ1A",
});

const storage = new multer.memoryStorage();

const imageUploadUtil = async (file) => {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
};

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
