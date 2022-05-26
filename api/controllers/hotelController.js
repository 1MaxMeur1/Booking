import Hotel from '../models/Hotel.js'
import Room from '../models/Room.js'

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body)
    try {
        const savedHotel = await newHotel.save()
        res.status(200).json(savedHotel)
    } catch(e) {
        next(e)
    }
}

export const updateHotel = async (req, res, next) => {
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedHotel)
    } catch(e) {
        next(e)
    }
}

export const deleteHotel = async (req,res,next) => {
    try {
        await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json('Hotel has been deleted.')
    } catch(e) {
        next(e)
    }
}

export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch(e) {
        next(e)
    }
}

export const getAllHotels = async (req, res, next) => {
    const {min,max, ...others} = req.query
    try {
        const hotels = await Hotel.find({
            ...others,
            cheapestPrice: {$gt: min | 1, $lt: max || 9999999999}
        }).limit(req.query.limit)
        res.status(200).json(hotels)
    } catch(e) {
        next(e)
    }
}

export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.split(',')
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city:city})
        }))
        res.status(200).json(list)
    } catch(e) {
        next(e)
    }
}

export const countByType = async (req, res, next) => {
    const countHotels = await Hotel.countDocuments({type: 'hotel'})
    const countApartments = await Hotel.countDocuments({type: 'apartment'})
    const countResorts = await Hotel.countDocuments({type: 'resort'})
    const countVillas = await Hotel.countDocuments({type: 'villa'})
    const countCabins = await Hotel.countDocuments({type: 'cabin'})

    res.status(200).json([
        {type: 'hotel', count: countHotels},
        {type: 'apartment', count: countApartments},
        {type: 'resort', count: countResorts},
        {type: 'villa', count: countVillas},
        {type: 'cabin', count: countCabins}
    ])
}

export const getHotelRooms = async (req,res,next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        const list = await Promise.all(
            hotel.rooms.map(room => {
                return Room.findById(room)
            })
        )
        res.status(200).json(list)
    } catch(err) {
        next(err)
    }
}