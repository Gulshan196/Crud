

import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import route from './routes/Employees.js'
const app = express();

app.use(express.json())




app.listen(process.env.PORT , ()=>{
    console.log("server is now listening at port 8000")

})

app.use('/emp',route)
















