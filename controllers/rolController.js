const {roles} = require("../database/database")

async function get(req, res){
    try {
        const rolesList =  await roles.findAll()
        console.log(rolesList);
        res.json({
            data: rolesList
        })

        
    } catch (error) {
        console.log(error);
        
    }
}


async function show(req, res) {
    const {id} = req.params
    let singleRol = await roles.findOne({where:{idRol: id}})
    res.json({
        data: singleRol
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



async function destroy(req, res) {
    const {id} = req.params
   let rol = await roles.findOne({where:{idRol: id}})
   if(rol){
       await roles.destroy({
           where:{
               idRol:id
           }
       })
       return res.status(200).json({"message": "product deleted"}) 
   }

   return res.status(404).json({"message": "El producto no existe"})   

   
   

}

module.exports = {
    get,
    store,
    show,
    destroy
}
