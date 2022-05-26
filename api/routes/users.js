import express from 'express'
import {updateUser, deleteUser, getUser, getAllUsers} from '../controllers/userController.js'
import {verifyUser, verifyAdmin} from '../utils/verifyToken.js'

const router = express.Router()

// router.get('/checkauthentification', verifyToken, (req, res, next) => {
//     res.send("Hello, user! You are loggen in!")
// })

// router.get('/checkuser:id', verifyUser, (req, res, next) => {
//     res.send("Hello, user! You are loggen in and you can delete your account!")
// })

// router.get('/checkadmin:id', verifyAdmin, (req,res,next) => {
//     res.send("Welcome dear admin!")
// })

router.put('/:id', verifyUser, updateUser)
router.delete('/:id', verifyUser, deleteUser)
router.get('/:id', verifyUser, getUser)
router.get('/', verifyAdmin, getAllUsers)

export default router