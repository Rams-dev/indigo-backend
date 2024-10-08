const {users} = require("../database/database")
const { repositoryModel } = require("../database/models/repository");

async function get(req, res){
    try {
        data = await users.findAll()
        res.json({
            data: data
        })
    } catch (error) {
        console.log(error);
        
    }
}


async function show(req, res) {
    try {
        const {id} = req.params
        model = new repositoryModel(users, "idUsuario")
        res.json({
            data: await model.show(id)
        })

    } catch (error) {
        res.status(403).json({message:error, data:[]})
        console.log(error);
        
    }
    
  
}


async function store(req, res){
    try {
        const rolCreated =  await users.create(req.body)
        res.json({
            "message": "Rol create",
            data: rolCreated
        })

        
    } catch (error) {
        res.status(500).json({message:error, data:[]})
        
    }
}


async function update(req, res){
    id = req.params.id
    
    try {
        model = new repositoryModel(users, "idUsuario")
        data = await model.update(id, req.body)
        res.json({
            data: data
        })
    } catch (error) {
        res.status(403).json({message:error, data:[]})
        console.log(error);
        
    }
}



async function destroy(req, res) {
    const {id} = req.params
    let model = new repositoryModel(users, "idUsuario")
    resp = await model.destroy(id)
    return res.status(200).json({"message": "product deleted"}) 
}


async function activeUser(req, res){
    id = req.params.id
    let data = await users.update({estatus:"A"}, {where:{idUsuario: id}})
    res.json({
        data: data
    })

}

module.exports = {
    get,
    store,
    show,
    update,
    destroy,
    activeUser
}