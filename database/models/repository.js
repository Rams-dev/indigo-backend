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
        let element = await this.model.findOne({where:{[idModel] : id, estatus:'A'}})
        if (element == null){
            throw 'No existe este registro'
        }
        return element
    }


    async store(dataStore){
        return await this.model.create(dataStore)            
    }

    async update(id, dataUpdate){
        let idModel = this.id
        await this.show(id)                   
        return await this.model.update(dataUpdate, {where:{[idModel] : id}})
        
    }


    async destroy(id) {
        return this.update(id, {estatus:'I'})
    }
}

module.exports = {repositoryModel}