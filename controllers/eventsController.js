const {event} = require("../database/database");
const { repositoryModel } = require("../database/models/repository");
const { Op } = require("sequelize");

async function get(req, res){
    try {

        dateStart = req.query.dateStart
        date = req.query.date
        dateEnd = req.query.dateEnd
        if(date){
            data = await getWithOutDate()
        }else if(dateStart){
            data = await getbyRange(dateStart, dateEnd) 
        }else{
            model = new repositoryModel(event, "idEvent")
            data = await model.getAll()
        }


        res.json({
            data: data
        })
    } catch (error) {
        console.log(error);
        
    }
}

async function getWithOutDate(){

    return await event.findAll({where:{estatus:'A', dateStart:null}})

}


async function getbyRange(dateStart, dateEnd){
    return await event.findAll({where:{estatus:'A',
                
        [Op.or]:[{
            dateStart:{[Op.between]: [dateStart, dateEnd]}

        },
        {
            dateEnd:{[Op.between]: [dateStart, dateEnd]}

        },

    ]
    
}})
}


async function show(req, res) {
    try {
        const {id} = req.params
        model = new repositoryModel(event, "idEvent")
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
        const rolCreated =  await event.create(req.body)
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

    console.log(req.body);
    
    try {
        model = new repositoryModel(event, "idEvent")
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
    let model = new repositoryModel(event, "idEvent")
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