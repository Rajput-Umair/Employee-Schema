const {models} = require("./index")

module.exports={
    createUser: async(body)=>{
        // console.log(body);
        try{
            const createdUser = await models.users.create({...body}) 
            return{
                response : createdUser
            }

        }catch(error){
            return{
                    error: error.message,
            }
        }
    }
}