require('dotenv').config()
const app = require('./app')

const PORT = process.env.PORT || 3000

app.listen(PORT, err => {
    console.log(err ? 'Erro ao iniciar.' : `Servidor iniciado na porta ${PORT}`)
})
