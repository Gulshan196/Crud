import jwt from "jsonwebtoken"
import client from '../connect.js'
class Authentication {

    static checkUserAuth = async (req, res, next) => {

        let token
        const { authorization } = req.headers
        if (authorization && authorization.startsWith('Bearer')) {
            try {
                token = authorization.split(' ')[1]
                // verify token
                const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY)
                // console.log(userID)
                // get user from tokken
                req.userID = await client.query(`SELECT * FROM employees where employees.empid = '${userID}'`)
                // console.log(emp.rows[0])
                next()

            } catch (err) {
                res.send({ "status": "cant authorize" })
            }
        } else {
            res.send({ "status": "failed", "message": "token not found" })
        }

    }
}
export default Authentication