const axios = require('axios')
const request = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' })

const errorMethod = (res, err) => res.status(404).json(err)

const listAll = res => {
    request.get('pokemon')
        .then(results => res.status(200).json(results.data))
        .catch(err => errorMethod(res, err))
}

module.exports = {
    listAll
}