require('dotenv').config()
const express = require('express')
const app = express()

const { PORT } = process.env
const Routes = require('./routes')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(Routes)

app.listen(PORT, err => console.log(err ? 'Erro ao iniciar.' : `Servidor iniciado na porta ${PORT}`))
