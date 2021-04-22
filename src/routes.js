const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => res.render("index"))
routes.get('/job', (req, res) => res.render("job"))

module.exports = routes;