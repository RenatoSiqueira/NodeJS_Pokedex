const express = require('express')
const router = express.Router()

const { listAll, listOne } = require('../controllers')

router
    .get('/', (req, res) => listAll(req, res))
    .get('/list/:version', (req, res) => listAll(req, res))
    .get('/pokemon/:version/:id', (req, res) => listOne(req, res))

module.exports = router