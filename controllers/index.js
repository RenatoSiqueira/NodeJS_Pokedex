const axios = require('axios')
const request = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' })

const errorMethod = (res, err) => res.status(404).json(err)

const listAll = async (req, res) => {
    try {
        const reqResults = await request.get('pokemon?offset=0&limit=6')

        if (req.params.version === 'v1')
            res.status(200).json(results.data)
        else {
            const { count, next, previous, results } = reqResults.data
            const newData = results.map(item => {
                const { url } = item
                const id = url.slice(url.length - 2, url.length - 1)
                item.id = id.length === 1 ? '00' + id : id.length === 2 ? '0' + id : id
                return item
            })
            res.render('listAll', { count, next, previous, results: newData })
        }
    } catch (err) {
        errorMethod(res, err)
    }
}

module.exports = {
    listAll
}