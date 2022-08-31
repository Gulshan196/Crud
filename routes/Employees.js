import EmployeesServices from '../Services/Employees_services.js'
import express from 'express'
import Authentication from '../middleware/authenticate.js'
const router = express.Router()

// route level middleware - protected route
router.use('/changepassword', Authentication.checkUserAuth)

//public route
router.post('/register',EmployeesServices.EmployeesRegister)
router.post('/login',EmployeesServices.EmployeesLogin)

//protected route
router.post('/changepassword',EmployeesServices.ChangeEmpPassword)

export default router

