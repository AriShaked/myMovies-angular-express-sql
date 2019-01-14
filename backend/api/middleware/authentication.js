const jwt = require('jsonwebtoken');

module.exports = (req , res , next) => {
    
    const tok = req.headers.authorization.split(" ")[1];
    try{
        
         const decoded = jwt.verify(tok, 'secret1234');
         req.userData = decoded;
        next();
    }catch(error) {
        return res.status(401).json({
            message:'Authentication mw -Auth failed',
            
        })
    }
}