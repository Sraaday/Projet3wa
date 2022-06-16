import "dotenv/config.js";
import { Post } from "../models/post.js";
import * as fs from "fs";

// création d'un Post
export const createPost = async (req, res) => {
    const title = req.body.title; 
    const imgUrl = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;
    const userId = req.userId;
    console.log(title, imgUrl, userId)
    Post.create({
        Title: title,
        imgUrl: imgUrl,
        userId: userId,

    })
    .then(() => res.status(201).json({ message: 'Post enregistré !'}))
    .catch(error => res.status(400).json({ message: error }));
};

// récupération de tous les Posts
export const getAllPost = async (req, res) => {
    Post.findAll()
    .then(posts => res.status(200).json(posts))
    .catch(error => res.status(400).json({ error }));
};

// récupération d'un Post
export const getOnePost = async (req, res) => {
    Post.findOne({where:{ id: req.params.id }})
    .then(post => res.status(200).json(post))
    .catch(error => res.status(404).json({ error }));
};


// suppression d'un Post
export const deletePost = async (req, res) => {
    Post.findOne({where: { id: req.params.id }})
    .then(post => {
        if ( req.userId == post.userId) {
            console.log(post.imgUrl)
            const filename = post.imgUrl.split('/images/')[1];
            fs.unlink(`images/${filename}`, () => {
                console.log( "params", req.params.id)
                Post.destroy( {where:{ id: req.params.id }})
                .then(() => res.status(200).json({ message: 'Post supprimé !'}))
                .catch(error => res.status(400).json({ error }));
            });
        }
        else {
            return res.status(401).json ({error: 'pas autorisé'})
        }
    })
    .catch(error => res.status(500).json({ message: "Erreur lors de la suppression" }));
};