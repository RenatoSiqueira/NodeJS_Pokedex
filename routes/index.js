const express = require('express')
const router = express.Router()

const { listAll } = require('../controllers')

router
    .get('/', (req, res) => listAll(req, res))
    .get('/list/:version', (req, res) => listAll(req, res))

module.exports = router