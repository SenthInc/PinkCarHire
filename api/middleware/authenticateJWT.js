// const jwt = require('jsonwebtoken');
// const jwtSecret = process.env.SECRET;
// const cookieParser = require('cookie-parser');


// const authenticateJWT = (req,res,next) => {
//     const {token} = req.cookies;
//     if(token){
//         jwt.verify(token, jwtSecret, {},async (err,clientData)=>{
//             if(err) throw err;
//             req.user = clientData;
//             next();
//         })
//     }else{
//         res.json(null);
//     }
// }

// module.exports = authenticateJWT;
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.SECRET;

function authenticateJWT(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Authentication token missing" });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: "Invalid or expired token" });
    }
}

module.exports = authenticateJWT;
