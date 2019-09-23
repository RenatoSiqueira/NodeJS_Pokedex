require('dotenv').config()
const express = require('express')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')
const app = express()

const PORT = process.env.PORT || 3000
const Routes = require('./routes')

const swaggerDoc = YAML.load('./swagger.yaml')

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc))

app.use(Routes)

app.listen(PORT, err => console.log(err ? 'Erro ao iniciar.' : `Servidor iniciado na porta ${PORT}`))
