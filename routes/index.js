const express = require('express')
const router = express.Router()

const { listAll } = require('../controllers')

router
    .get('/list', (req, res) => listAll(res))

module.exports = router