import { Comment } from "../models/comments.js";

// création d'un commentaire
export const createComment = async (req, res) => {
    console.log(req.body.content)
    Comment.create({
        content: req.body.content,
        userId: req.userId,
        postId: req.body.postId

    })
    .then(() => res.status(201).json({ message: 'Commentaire enregistré !'}))
    .catch(error => res.status(400).json({ message: error }));
};

// récupération des tous les commentaires d'un post
export const getAllComment = async (req, res) => {
    Comment.findAll({where: { postId : req.params.id}})
    .then(comments => res.status(200).json(comments))
    .catch(error => res.status(400).json({ error }));
};

// récupération d'un commentaire
export const getOneComment = async (req, res) => {
    Comment.findOne({where: { id: req.params.id }})
    .then(comment => res.status(200).json(comment))
    .catch(error => res.status(404).json({ error }));
};

// modification d'un commentaire
export const modifyComment = async (req, res) => {
    const commentObject = req.file ?
    {
        ...JSON.parse(req.body.comment),
    } : { ...req.body };
    Comment.update({where:{ id: req.params.id, userId: req.userId} }, { ...commentObject, id: req.params.id })
    .then(() => res.status(200).json({ message: 'Commentaire modifiée !'}))
    .catch(error => res.status(400).json({ error }));
};

// suppression d'un commentaire
export const deleteComment = async (req, res) => {
    Comment.findOne({where:{ id: req.params.id  }})
    .then(c => {
        if (req.userId == c.userId) {
            Comment.destroy({where:{ id: req.params.id }}) 
        
            .then(() => res.status(200).json({ message: 'Commentaire supprimé !'}))
            .catch(error => res.status(400).json({ error }));
        }
        else {
            return res.status(401).json ({error: 'pas autorisé'})
        }
    })
    .catch(error => res.status(500).json({ error }));
};