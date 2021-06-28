class instanceConnection{
    constructor(connectionString){
        this.connectionString = connectionString
    }

    async connect(){
         return this
    }
}

module.exports = instanceConnection