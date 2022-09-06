import client from "../connect.js"
import GetMax from "../models/Getmaxid.js"

class StudentsServices {

    static addStudentData = async (req, res) => {
        const { studentname, subject, marks } = req.body
        let studentid = await client.query(`select studentid from student`)
        let main_data_array = studentid.rows
        let maxid = GetMax.GetMaxId(main_data_array)
        console.log(maxid)

        await client.query(`insert into student(studentid,studentname,subject,marks) 
                        values('${maxid + 1}','${studentname}','${subject}','${marks}')`)
        res.json({ "message": "added" })
    }

    static showStudentData = async (req, res) => {
        let data = await client.query(`select * from student order by studentid`)
        res.json(data.rows)
    }

    static deleteStudentData = async (req, res) => {
        let id = req.params.id
        await client.query(`delete from student where studentid = ${id}`)
        res.json({ "message": "deleted" })
    }

    static updateStudentData = async (req, res) => {
        let id = req.params.id
        const { subject, marks } = req.body
        await client.query(`update student set subject = '${subject}',marks='${marks}' where studentid=${id}`)
        res.json({ "message": "updated" })
    }
}
export default StudentsServices