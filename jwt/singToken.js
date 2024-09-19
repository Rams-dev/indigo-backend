const jwt = require('jsonwebtoken');

function singToken(userData){
    return jwt.sign({
        name: data.nombre,
        id: data.idUsuario
    }, "secret")   

}

module.exports = {
    singToken
}