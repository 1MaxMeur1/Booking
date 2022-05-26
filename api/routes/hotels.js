import express from 'express'
import {createHotel,
    updateHotel, 
    deleteHotel, 
    getHotel, 
    getAllHotels,
    countByCity, 
    countByType,
    getHotelRooms} from '../controllers/hotelController.js'
import {verifyUser, verifyAdmin} from '../utils/verifyToken.js'

const router = express.Router()

router.post('/', verifyAdmin, createHotel) // Create a hotel
// {
//     "name": "Hotel number zero",
//     "type": "cabin",
//     "city": "Berlin",
//     "address": "Hola amigo",
//     "distance": "500m away",
//     "title": "Hotel nda",
//     "desc": "GOOD HOTEL!",
//     "cheapestPrice": 200
// }

router.put('/:id', verifyAdmin, updateHotel) //Update a hotel - id

router.delete('/:id', verifyAdmin, deleteHotel) //Delete a hotel - id

router.get('/find/:id', getHotel) //Get a hotel - id

router.get('/', getAllHotels) //Get all hotels

// router.get('/', getHotels)
router.get('/countByCity', countByCity)
router.get('/countByType', countByType)
router.get("/room/:id", getHotelRooms)


export default router