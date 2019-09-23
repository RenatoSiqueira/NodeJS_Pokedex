const expect = require('chai').expect
const request = require('supertest')
const app = require('../app')

describe('Testing RestAPI', () => {
    describe('/LIST METHOD', () => {
        it('Should return an Json list with results when no query params', done => {
            request(app)
                .get('/list/v1')
                .expect(200)
                .end((err, res) => {
                    expect(err).be.null
                    expect(res.body).be.an('object')
                    expect(res.body).to.not.be.empty
                    done()
                })
        })
        it('Should return an Json list with results when query params', done => {
            request(app)
                .get('/list/v1?pag=2')
                .expect(200)
                .end((err, res) => {
                    expect(err).be.null
                    expect(res.body).be.an('object')
                    expect(res.body).to.not.be.empty
                    done()
                })
        })
    })

    describe('/POKEMON METHOD', () => {
        it('[USING NAME] Should return an Json details of pokemon name', done => {
            request(app)
                .get('/pokemon/v1/pikachu')
                .expect(200)
                .end((err, res) => {
                    expect(err).be.null
                    expect(res.body).be.an('object')
                    expect(res.body).to.not.be.empty
                    done()
                })
        })
        it('[USING ID] Should return an Json details of pokemon id', done => {
            request(app)
                .get('/pokemon/v1/1')
                .expect(200)
                .end((err, res) => {
                    expect(err).be.null
                    expect(res.body).be.an('object')
                    expect(res.body).to.not.be.empty
                    done()
                })
        })
    })
})