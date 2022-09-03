import paginatedResults from '../models/pagination.js'
import express from 'express'
const router = express.Router()

router.get('/users', paginatedResults(), (req, res) => {
    res.json(res.paginatedResults)
  })

  export default router