const express = require('express')
const router = express.Router()
const knex = require('../db/connection')

router.get('/', (req, res, next) => {
    knex('cartoon').select().orderBy('id')
    .then((cartoons) => {
        res.json(cartoons)
    })
})

router.get('/:id', (req, res, next) => {
    knex('cartoon').select().where('id', req.params.id)
    .then((cartoon) => {
        res.json(cartoon)
    })
})

router.post('/', (req, res, next) => {
    knex('cartoon').insert(req.body).returning('id')
    .then((id) => {
        res.json({cartoon_id: id})
    })
})

router.put('/:id', (req, res, next) => {
    knex('cartoon').update(req.body).where('id', req.params.id)
    .then((id) => {
        res.send('updated')
    })
})

router.delete('/:id', (req, res, next) => {
    knex('cartoon').delete().where('id', req.params.id)
    .then((id) => {
        res.send("deleted")
    })
})

module.exports = router
