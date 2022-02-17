const User = require('../models/User')


const userExistByEmail = async (email) =>{

    const user = await User.find()
    const userExist = user.some( element => element.email == email )
    return userExist
}



module.exports = {
    userExistByEmail,
}