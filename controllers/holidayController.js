const {holiday} = require("../database/database");
const { repositoryModel } = require("../database/models/repository");
const { Op } = require("sequelize");

async function get(req, res){
    console.log("aqui andamos");
    try {
        

        model = new repositoryModel(holiday, "idHoliday")
        data = await model.getAll()
        
        console.log(data);
        

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
        model = new repositoryModel(holiday, "idHoliday")
        res.json({
            data: await model.show(id)
        })

    } catch (error) {
        res.status(403).json({message:error, data:[]})
        console.log(error);
        
    }
    
  
}


async function store(req, res){

    console.log(req.body);
    
    try {
        const data =  await holiday.create(req.body)
        res.json({
            "message": "created",
            data: data
        })

        
    } catch (error) {
        res.status(500).json({message:error, data:[]})
        
    }
}


async function update(req, res){
    id = req.params.id

    console.log(req.body);
    
    try {
        model = new repositoryModel(holiday, "idHoliday")
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
    let model = new repositoryModel(holiday, "idHoliday")
    resp = await model.destroy(id)
    return res.status(200).json({"message": "product deleted"}) 
}

module.exports = {
    get,
    store,
    show,
    update,
    destroy
}