const express = require('express')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const app = express()

const Routes = require('./routes')

const swaggerDoc = YAML.load('./swagger.yaml')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use(Routes)

module.exports = app