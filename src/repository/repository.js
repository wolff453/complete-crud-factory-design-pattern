class userRepository{
    constructor(instanceConnection){
        this.instanceConnection = instanceConnection
    }

    async selectAll(query){
         return await this.instanceConnection.connectionString
         .where({email:query})
            .select()
                .table("usuarios")
        
    }

    async insert(query){
        return await this.instanceConnection.connectionString
            .insert(query)
                .into("usuarios")
    }

    async update(query, value) {
        return await this.instanceConnection.connectionString
        .where(query)
            .update(value)
                .table("usuarios")
    }
    async delete(query, value){
        return await this.instanceConnection.connectionString
             .where(query)
                .delete(value)
                    .table("usuarios")

                 
    }

    async innerJoin(){
        return await this.instanceConnection.connectionString
                .select()
                    .table("usuarios")
                        .join("pedidos", 'usuarios.ID', '=', 'pedidos.ID')
    }

}

module.exports = userRepository