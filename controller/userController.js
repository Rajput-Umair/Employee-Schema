const userService = require("../service/userService")
const joi = require("joi")

const createUserSchema= joi.object().keys({
    userName : joi.string().required().min(3).max(34),
    password : joi.string().required().min(6).max(34),
    // confirmPassword: joi.string().required(joi.ref('password'))

    // password : joi.string().required().min(6).max(34)
})


module.exports = {
    createUser : async (req , res)=>{
        try{
            const validate = await createUserSchema.validateAsync(req.body)
            const createdUser = await userService.createUser(validate)
            if(createdUser.error){
                return res.send({
                    error:createdUser.error
                })
            } return res.send({
                
                 response : createdUser.response
            })

        }catch(error){
            return res.send({
                error:{
                    error: error.message,
                    fileName: "userController"
                }
            })
        }
    }
}