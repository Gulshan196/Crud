import client from "../connect.js"

  
  function paginatedResults() {
    return async (req, res, next) => {
      const page = parseInt(req.query.page)
      const limit = parseInt(req.query.limit)
  
      const startIndex = (page - 1) * limit
      const endIndex = page * limit
  
      const results = {}
  
      if (endIndex < (await client.query(`SELECT count(*) FROM student`)).rows[0].count) {
        results.next = {
          page: page + 1,
          limit: limit
        }
      }
      
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit
        }
      }
      try {
        const student = await client.query(`SELECT *

        FROM student
    
         ORDER BY student.studentid 
    
         LIMIT  ${limit}   OFFSET ${page-1}`) 
        // results.results = student.rows

    results.results = student.rows
        res.paginatedResults = results
        next()
      } catch (e) {
        res.status(500).json({ message: e.message })
      }
    }
  }

  export default paginatedResults