const musicModel = require("../models/music.model");
const albumModel = require("../models/album.model");
const { uploadFile } = require("../storage/storage.service")



const jwt = require("jsonwebtoken");


async function createMusic(req, res){

    const {title} = req.body;
    const file = req.file;

    const  result = await uploadFile(file.buffer.toString("base64"));

    const music = await musicModel.create({
        uri: result.url,    
        title,
        artist:req.user.id
    })
            

    res.status(200).json({
        message:"Music created successfully",
        music:{
            id: music._id,
            uri: music.uri,
            title: music.title, 
            artist: music.artist

        }
    })
}






// creating the music album

async function createAlbum(req, res){


        const {title, musics} = req.body;

        const album = await albumModel.create({
            title,
            artist: req.user.id,
            musics: musics
        })

        res.status(200).json({
            message:"Album created successfully",
            album:{
                id: album._id,
                title: album.title,
                artist: album.artist,
                musics: album.musics
            }
        })

}


// fetching all the musics 

async function getAllMusics(req, res){
    const  musics = await musicModel.find().populate("artist", "username email")

    res.status(200).json({
        message: "Musics fetched succesfully",
        musics: musics
    })
}


async function getAllAlbums(req,res){
    const albums = await albumModel.find().populate("artist", "username email").populate("musics")


    res.status(200).json({
        message: "Album feteched successfully",
        albums: albums
    })

}


module.exports = {createMusic, createAlbum, getAllMusics, getAllAlbums}; 