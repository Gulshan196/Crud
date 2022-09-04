

import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import route from './routes/Employees.js'
import route1 from './routes/student.js'
import router from './routes/requestQueryModel.js'
import cors from 'cors'
const app = express();
app.use(cors({
    origin: "http://localhost:3000"
}))
app.use(express.json())


app.listen(process.env.PORT, () => {
    console.log("server is now listening at port 8000")

})

app.use('/emp', route)
app.use('/student', route1)
app.use('/stu',router)















