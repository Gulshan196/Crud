import client from '../connect.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
client.connect()
class EmployeesServices {
    static EmployeesRegister = async (req, res) => {
        const { name, empid, password, confirm_password } = req.body

        const emp = await client.query(`SELECT * FROM employees where employees.empid = '${empid}'`)

        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)
        if (password == confirm_password && emp.rows.length == 0) {

            await client.query(`insert into employees(empid,empname,password) 
                        values('${empid}','${name}','${hashPassword}')`)
            // generate json web token 
            const token = jwt.sign({ userID: empid }
                , process.env.JWT_SECRET_KEY, { expiresIn: '5d' })

            res.send({ "message": "sucess", "token": token })

        }
        else {
            res.send({ "message": "failed" })
        }

    }
    static EmployeesLogin = async (req, res) => {
        const { empid, password } = req.body
        const emp = await client.query(`SELECT * FROM employees where employees.empid = '${empid}'`)
        
        console.log(emp);
        if (emp.rows.length!=0) {
            const p = emp.rows[0].password
            const isMatch = await bcrypt.compare(password, p)
            if (emp.rows[0].empid == empid && isMatch) {
                const token = jwt.sign({ userID: empid }
                    , process.env.JWT_SECRET_KEY, { expiresIn: '5d' })
                res.send({ "status": "success", "message": "logged in", "token": token })
            } else {
                res.send({ "status": "failed", "message": "invalid id or password" })
            }

        } else {
            res.send({ "status": "failed", "message": "user does not exist" })
        }

    }

    static ChangeEmpPassword = async (req, res) => {
        const { password, confirm_password } = req.body
        if (password === confirm_password) {
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)
            await client.query(`UPDATE employees set password = '${hashPassword}' where empid = '${req.userID.rows[0].empid}'`)
            res.send({ "status": "success", "message": "password changed" })
        }
        else {
            res.send({ "status": "failed", "message": "password do not match" })
        }
        // console.log(req.userID.rows[0], 'aa gye')
        // res.send({ "status": "reaches" })
    }

}
export default EmployeesServices