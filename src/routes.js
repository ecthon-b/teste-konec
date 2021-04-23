const express = require('express')
const routes = express.Router()

const Job = {
    controller: {
        index(req, res) {

        }
    },
    services: {

    }
}

// routes.get('/', Job.controllers.index)
routes.get('/', (req, res) => res.render("index"))
routes.get('/job', (req, res) => res.render("job"))
routes.post('/job', (req, res) => res.render("job"))
routes.get('/job/edit', (req, res) => res.render("job-edit"))


module.exports = routes;