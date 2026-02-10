const ImageKit = require("@imagekit/nodejs");

const ImagekitClient = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function uploadFile(file) {
  const response = await ImagekitClient.files.upload({
    file,
    fileName: "music_" + Date.now(),
    folder: "/spotify-backend/musics",
  });

  return response;
}


module.exports = {uploadFile}
