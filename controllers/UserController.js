const {users} = require("../database/database")

async function get(req, res){
    try {
        const usersList =  await users.findAll()
        console.log(usersList);
        res.json({
            data: usersList
        })
    } catch (error) {
        console.log(error);
        
    }
}


async function show(req, res) {
    const {id} = req.params
    let singleRol = await users.findOne({where:{idRol: id}})
    res.json({
        data: singleRol
    })
    
  
}


async function store(req, res){
    try {
        const rolCreated =  await users.create(req.body)
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
   let rol = await users.findOne({where:{idRol: id}})
   if(rol){
       await users.destroy({
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
