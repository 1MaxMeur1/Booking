import Room from '../models/Room.js'
import Hotel from '../models/Hotel.js'
import {createError} from '../utils/error.js'

export const createRoom = async (req, res, next) => {

    const hotelId = req.params.hotelid
    const newRoom = new Room(req.body)

    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id}})
        } catch(e) {
            next(e)
        }
        res.status(200).json(savedRoom)
    } catch(e) {
        next(e)
    }
}

export const updateRoom = async (req, res, next) => {
    try {
        const updatedRoom = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedRoom)
    } catch(e) {
        next(e)
    }
}

export const updateRoomAvailability = async (req, res, next) => {
    try {
        await Room.updateOne({"roomNumbers._id": req.params.id}, {
            $push: {
                "roomNumbers.$.unavailableDates": req.body.dates
            }
        })
        res.status(200).json('Room has been updated!')
    } catch(e) {
        next(e)
    }
}

export const deleteRoom = async (req,res,next) => {
    const hotelId = req.params.hotelid
    try {
        await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$pull: {rooms: rea.params.id}})
        } catch(e) {
            next(e)
        }
        res.status(200).json('Room has been deleted.')
    } catch(e) {
        next(e)
    }
}

export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    } catch(e) {
        next(e)
    }
}

export const getAllRooms = async (req, res, next) => {
    try {
        const rooms = await Room.find()
        res.status(200).json(rooms)
    } catch(e) {
        next(e)
    }
}