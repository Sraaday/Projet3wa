import jwt from "jsonwebtoken";

export const auth = async (req, res, next) => {
  try {
    // On recupère ici le token d'authentification signé via la clé privé généré dans le backend
    const token = req.headers.authorization.split(' ')[1];
    // renvoi le payload si le token et sa signature sont valides, remonte l'erreur sinon
    const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
    // On extrait les informations du token vérifié
    req.userId = decodedToken.userId;
    req.isAdmin = decodedToken.isAdmin;
    if (req.body.userId && req.userId !== userId ) {
      throw 'Invalid user ID';
    } else {

      next();
    }
    
    
 
  } catch {
    res.status(401).json({
      error: 'Invalid request!'
    });
  }
};