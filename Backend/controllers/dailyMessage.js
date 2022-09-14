import { dailyMessage } from "../models/dailyMessage.js";

// création d'un dailyMessage
export const createDailyMessage = async (req, res) => {
    if (!req.isAdmin){
        console.log("toto")
        res.status(403).json({Message: "pas autorisé"});
    }else{
        const title = req.body.title; 
        const content = req.body.content;   
        const userId = req.userId;
        console.log(title, content, userId)
        dailyMessage.create({
            title: title,
            content: content,
            userId: userId,

        })
        .then(() => res.status(201).json({ message: 'dailyMessage enregistré !'}))
        .catch(error => res.status(400).json({ message: error }));
    }
};

// récupération du dernier dailyMessage
export const getDaily = async (req, res) => {
    dailyMessage.findOne({order: [['id', 'DESC']]})
    .then(daily => res.status(200).json(daily))
    .catch(error => res.status(400).json({ error }));
};