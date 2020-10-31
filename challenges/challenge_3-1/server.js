const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get('/', (req, res) => {
    return res.render("about")
})

server.get('/contents', (req, res) => {
    return res.render("contents")
})

server.use((req, res) => {
    res.status(404).render("not-found")
})

server.listen(5000, () => {
    console.log("server is running")
})