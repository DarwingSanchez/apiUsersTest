const User = require('../models/User')
const validate = require('../libs/validatingUser')

const hello  = (req, res) => {
    res.json({Message: 'Hola'})
}

const getUsers = async (req, res) => {
    try {
       const users = await User.find()
       res.status(200).json(users)
    } catch (error) {
        
    }
}
const getOneUser = async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        res.status(200).json({Message: 'Getting One user', user})
    } catch (error) {
        res.json('User not found')
    }
}
const createUser = async (req, res) => {
    try {
        const body = req.body
        const user = new User(body)
        const userExist = await validate.userExistByEmail(user.email)
        if (userExist) throw new Error('El correo ya está en uso')
        await user.save()
        res.json({Message: 'Creating one user', body})
    } catch (error) {
        res.json({Message: error.message})
    }
}
const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const userUpdated = await User.findByIdAndUpdate(id, body)
        res.status(200).json({Message: 'Updating One user', id})
    } catch (error) {
        res.json('Couldnt update the user.')
    }
}
const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        await User.findByIdAndDelete(id)
        res.status(200).json({Message: 'Deleating User', id})
        /* const users = User.find({}) */
    } catch (error) {
        res.json('Something went wrong try again in a few minutes')
    }
}


module.exports = {
    getUsers,
    getOneUser,
    createUser,
    updateUser,
    deleteUser,
    hello
}