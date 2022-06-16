import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config.js";
import { User } from "../models/user.js";

// Création d'un utilisateur
export const signup = async (req, res) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            console.log(`voici le password ${req.body.password} ${hash}`)
            User.create({
                mail: req.body.mail,
                password: hash,
                pseudo: req.body.pseudo
            })
                .then(() => res.status(201).json({ message: "Utilisateur créé"}))
                .catch(error => {res.status(400).json({ error : error })});
        })
        .catch(error => res.status(500).json({ error }));
};

// Connexion d'un utilisateur
export const login = async (req, res) => {
    User.findOne({ where: { mail: req.body.mail } })
        .then(user => {
            if (!user) {
                return res.status(401).json({ error: 'Utilisateur ou Mot de passe incorrect !' });
            }           
                bcrypt.compare(req.body.password, user.password)
                .then(check => {
                    if (!check) {
                        console.log(check)
                        return res.status(401).json({ error: 'Utilisateur ou Mot de passe incorrect !' });
                    }
                    res.status(200).json({
                        token: jwt.sign(
                            { userId: user.id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};

// Récupération des informations d'un utilisateur
export const getOneUser = async (req, res) => {
    User.findOne({where : {id : req.params.id}})
    .then(User => res.status(200).json(User))
    .catch(error => res.status(404).json({ error }));
};

// Suppression d'un utilisateur
export const deleteUser = (req, res) => {
    console.log(req.params.id)
    User.findOne({where: { id: req.params.id }})
    .then(user => {
        if ( req.params.id == user.id) {        
            User.destroy({where:{ id: req.params.id }})
            .then(() => res.status(200).json({ message: 'Utilisateur supprimé'}))
            .catch(error => res.status(400).json({ error }));
    }
    else {
        return res.status(401).json ({error: 'non autorisé'})
    }
    })
    .catch(error => res.status(500).json({ error }));
};



