const jwt = require('jsonwebtoken')

// middleware to validate token 
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')
    console.log(req.header);
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    try {
        const verified = jwt.verify(token, "secret")
        req.user = verified
        next() // continuamos
    } catch (error) {
        res.status(400).json({error: 'token no es válido'})
    }
}

module.exports = verifyToken;