const userAlreadyExists = require("../util/userExists")

 
class userService {
    constructor(userRepository){
        this.userRepository = userRepository
     }

    async find(query){
         return await this.userRepository.selectAll(query)
    
    }

    async insertWithSecurity(query){
        const exists = await this.find(query.email)
        if(exists.length > 0){
            throw new userAlreadyExists("Esse usuário já existe!")
           }

           return await this.userRepository.insert(query)
        // exists.length > 0 ? console.log("Erro! Este usuário já existe!") : await this.userRepository.insert(query)

            
     }

     async updateUser(query,value){
         return await this.userRepository.update(query,value)
     }

     async deleteUser(query,value){
         return await this.userRepository.delete(query,value)
     }

     async innerJoinUser(){
        return await this.userRepository.innerJoin()
             
    }
}

module.exports = userService