

import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import route from './routes/Employees.js'
import route1 from './routes/student.js'
import router from './routes/requestQueryModel.js'
const app = express();

app.use(express.json())

// const users = [{ id: 1, name: 'user1' },
// { id: 2, name: 'user1' },
// { id: 3, name: 'user2' },
// { id: 4, name: 'user3' },
// { id: 5, name: 'user4' },
// { id: 6, name: 'user5' },
// { id: 7, name: 'user6' },
// { id: 8, name: 'user7' },
// { id: 9, name: 'user' },
// { id: 10, name: 'user9' },
// { id: 11, name: 'user10' },
// { id: 12, name: 'user11' },]

// app.get('/users',(req,res)=>{
//     const page = req.query.page
//     const limit = req.query.limit

//     const startIndex = (page-1)*limit
//     const endIndex = page * limit   

//     const resultUsers = users.slice(startIndex,endIndex)
//     res.json(resultUsers)
// })




app.listen(process.env.PORT, () => {
    console.log("server is now listening at port 8000")

})

app.use('/emp', route)
app.use('/student', route1)
app.use('/stu',router)















