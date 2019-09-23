const express = require('express')
const router = express.Router()

const indexController = require('../controllers')

router
    .get('/', indexController.listAll)
    .get('/list/:version', indexController.listAll)
    .get('/pokemon/:version/:id', indexController.listOne)

module.exports = router