import User from '../models/User.js'

export const updateUser = async (req, res, next) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedUser)
    } catch(e) {
        next(e)
    }
}

export const deleteUser = async (req,res,next) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json('User has been deleted.')
    } catch(e) {
        next(e)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const User = await User.findById(req.params.id)
        res.status(200).json(User)
    } catch(e) {
        next(e)
    }
}

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await Hotel.find()
        res.status(200).json(users)
    } catch(e) {
        next(e)
    }
}