const jwt = require('jsonwebtoken')

// middleware to validate token 
const verifyToken = (req, res, next) => {
    const token = req.headers['auth-token']
    if (!token) return res.status(401).json('Acceso denegado')
    try {
        const verified = jwt.verify(token, "secret")        
        req.user = verified
        next() // continuamos
    } catch (error) {
        res.status(400).json('token no es válido')
    }
}

module.exports = verifyToken;