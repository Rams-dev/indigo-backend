const {roles} = require("../database/database")
const { repositoryModel } = require("../database/models/repository");

async function get(req, res){
    try {
        model = new repositoryModel(roles, "idRol")
        data = await model.getAll()
        // const rolesList =  await roles.findAll({where:{estatus:'A'}})
        // console.log(rolesList);
        res.json({
            data: data
        })



        
    } catch (error) {
        console.log(error);
        
    }
}


async function show(req, res) {
    const {id} = req.params
    // let singleRol = await roles.findOne({where:{idRol: id}})
    model = new repositoryModel(roles, "idRol")
    res.json({
        data: await model.show(id)
    })
    
  
}


async function store(req, res){
    try {
        const rolCreated =  await roles.create(req.body)
        console.log(rolCreated);
        res.json({
            "message": "Rol create",
            data: rolCreated
        })

        
    } catch (error) {
        console.log(error);
        
    }
}


async function update(req, res){
    try {
        idRol = req.params.id
        const existe =  await roles.findByPk(idRol)
        console.log(existe);
        
        
        if (existe == null){
            throw 'No existe este registro'
        }
        const rolUpdated = await roles.update(req.body, {where:{idRol : idRol}})
        console.log(rolCreated);
        res.json({
            data: rolUpdated
        })

        
    } catch (error) {
        res.status(403).json({data:error})
        console.log(error);
        
    }
}



async function destroy(req, res) {
    const {id} = req.params
    let model = new repositoryModel(roles, "idRol")
    res = await model.destroy(id)
    return res.status(200).json({"message": "product deleted"}) 

//     let rol = await roles.findOne({where:{idRol: id}})
//     if(rol){
//        await roles.update({estatus:'I'},{
//            where:{
//                idRol:id
//            }
//        })
//        return res.status(200).json({"message": "product deleted"}) 
//    }

//    return res.status(404).json({"message": "El producto no existe"})   

   
   

}

module.exports = {
    get,
    store,
    show,
    update,
    destroy
}
