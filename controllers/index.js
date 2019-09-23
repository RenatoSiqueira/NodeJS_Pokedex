const axios = require('axios')
const request = axios.create({ baseURL: 'https://pokeapi.co/api/v2/' })

const errorMethod = (res, err) => res.status(404).json(err)

const addId = item => {
    const id = item.url.match(/(\d{1,3})\/$/)[1]
    item.id = id
    item.cod = id.length === 1 ? '00' + id : id.length === 2 ? '0' + id : id
    return item
}

const listAll = async (req, res) => {
    let { pag } = req.query
    if (pag === undefined) { pag = 1 }
    const querySearch = `pokemon?offset=${(pag - 1) * 6}&limit=6`
    try {
        const reqResults = await request.get(querySearch)
        if (req.params.version === 'v1')
            res.status(200).json(reqResults.data)
        else {
            const { count, results } = reqResults.data
            const newData = results.map(item => addId(item))
            const nextPage = parseInt(pag) + 1
            const prevPage = parseInt(pag) - 1
            res.render('listAll', { count, nextPage, prevPage, results: newData })
        }
    } catch (err) {
        errorMethod(res, err)
    }
}

const listOne = async (req, res) => {
    const { version, id } = req.params
    const querySearch = `pokemon/${id}`
    try {
        const reqResults = await request.get(querySearch)
        if (version === 'v1')
            res.status(200).json(reqResults.data)
        else {
            const { species, forms, sprites, abilities, moves, types, stats } = reqResults.data
            const newId = addId(species)
            const results = {
                id: newId.id,
                cod: newId.cod,
                name: forms[0].name.toUpperCase(),
                sprites,
                abilities,
                moves,
                types,
                stats
            }
            const nextPage = parseInt(results.id) + 1
            const prevPage = parseInt(results.id) - 1
            res.render('listOne', { nextPage, prevPage, results })
        }
    } catch (err) {
        errorMethod(res, err)
    }
}

module.exports = {
    listAll,
    listOne
}