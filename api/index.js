import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import authRoute from './routes/auth.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import usersRoute from './routes/users.js'

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'BOOKING',
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to DB')
    } catch(err) {
        console.log(err)
    }
}

mongoose.connection.on('disconnected', () => {
    console.log('DB is disconnected!!!')
})

const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
}


const app = express()

app.use(cors(corsOptions))
app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', usersRoute)
app.use('/api/hotels', hotelsRoute)
app.use('/api/rooms', roomsRoute)

app.use((err, req, res,next) => {
    const errorStatus = err.status || 500
    const errorMessage = err.message || 'Something is wrong!!!'
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack
    })
})

app.listen(process.env.PORT, () => {
    connect()
    console.log('Connected to backend')
})