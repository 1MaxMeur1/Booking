import express from 'express'
import {createRoom, deleteRoom, getRoom, getAllRooms, updateRoom, updateRoomAvailability} from '../controllers/roomController.js'
import {verifyAdmin} from '../utils/verifyToken.js'

const router = express.Router()

router.post('/:hotelid', verifyAdmin, createRoom)
router.put('/:id', verifyAdmin, updateRoom)
router.put('/availability/:id', updateRoomAvailability)
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom)
router.get('/:id', getRoom)
router.get('/', getAllRooms)

export default router