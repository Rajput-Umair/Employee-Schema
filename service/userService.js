const userModel = require("../model/userModel")
const {hash}= require("bcrypt")
const {v4:uuid} = require("uuid")

module.exports={
    createUser : async (body)=>{
        console.log(body);
        try{
            body.userId = uuid() ;
            body.password = await hash(body.password,10);
            const createdUser = await userModel.createUser(body)
            if(createdUser.error){
                return{
                    error: createdUser.error
                }
            };
            return{
                response : createdUser.response
            }

        }catch{
            return{
                error:{
                    error:error.message,
                    fileName: "userService"
                }
            }
        }
    }
}