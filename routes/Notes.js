const express = require('express')
const router = express.Router()
// import UserController from '../controllers/userController.js'
// import checkUserAuth from '../middlewares/authMiddleware.js'

// route level middleware - to protect route


// Public Route

router.post('/department',UserController.userRegistration)


//Protected Route




export default router