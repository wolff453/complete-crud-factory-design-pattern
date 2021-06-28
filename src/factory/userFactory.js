const UserRepository = require("../repository/repository");
const UserService = require("../service/service");
const connectionString = require("../util/connection");
const InstanceConnection = require("../util/instanceConnection");
 



class userFactory {
     static async factory() {
        const instanceConnection = new InstanceConnection( connectionString )
        const userRepository = new UserRepository( instanceConnection )
        const userService = new UserService( userRepository)
         return userService
    }
}



module.exports = userFactory