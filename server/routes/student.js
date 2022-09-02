import StudentsServices from "../Services/students_services.js";
import express from 'express'
const router = express.Router()

router.post('/create',StudentsServices.addStudentData)

router.get('/show',StudentsServices.showStudentData)

router.delete('/delete/:id',StudentsServices.deleteStudentData)

router.put('/update/:id',StudentsServices.updateStudentData)

export default router