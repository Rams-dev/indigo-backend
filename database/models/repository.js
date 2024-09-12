class repositoryModel{
    model
    id
    constructor(model, id){
        this.model = model
        this.id = id
    }


    async getAll(){
        let datos = await this.model.findAll({where:{estatus:'A'}})
        console.log(datos);
        
        return datos
    }



    async show(id) {
        let idModel = this.id
        return await this.model.findByPk(id)
    }

    async store(dataStore){
        return await this.model.create(dataStore)            
    }

    async update(id, dataUpdate){
        try {
            const idModel = this.id
            const exist =  await this.model.findByPk(id)
                        
            if (exist == null){
                throw 'No existe este registro'
            }

            return await this.model.update(dataUpdate, {where:{idModel : id}})
    
            
        } catch (error) {
            return error
            
        }
    }


    async destroy(id) {
        const idModel = this.id
        let singleModel = await this.model.findOne({where:{idModel: id}})
        if (singleModel == null){
            
        }
        if(singleModel){
            return this.update(id, {estatus:'I'})
       }
    }
}

module.exports = {repositoryModel}