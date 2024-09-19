const {users} = require("../database/database")
const { singToken } = require("../jwt/singToken")


async function auth(req, res){
    noTelefono = req.body.noTelefono
    password = req.body.password
    try {
        data = await users.findOne({where:{noTelefono: noTelefono,password:password, estatus:'A'}})
        if (data){
            const token = await singToken(data)

            res.header('auth-token', token).json({
                usuarioData:data,
                token
            })
            console.log(data);
        }   else {

            res.status(400).json({
                "message":"Usuario no autorizado"
            })
        }    

    } catch (error) {
        console.log(error);
        
    }
}


module.exports = {
    auth,
}