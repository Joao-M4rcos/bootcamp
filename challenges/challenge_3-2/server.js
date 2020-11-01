const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const courses = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server,
    autoescape: false
})

server.get('/', (req, res) => {
    const about = {
        avatar_url: "https://cdn-images-1.medium.com/max/1200/1*TkXVfLTwsHdwpUEjGzdi9w.jpeg",
        name: "Rocketseat",
        details: "Rocketseat is a enterprise focused on giving the developer community direction on its way and along the way, become an excellent dev in no time.",
        technologies: [
            { name: "JavaScript" },
            { name: "HTML" },
            { name: "CSS" },
            { name: "React" }
        ],
        links: [
            { name: "Github", url: "https://github.com/Rocketseat"} ,
            { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/?hl=pt-br" },
            { name: "Facebook", url: "https://www.facebook.com/rocketseat/" }
        ]
    }

    return res.render("about", { about })
})

server.get('/courses', (req, res) => {
    return res.render("courses", { items: courses })
})

server.use((req, res) => {
    res.status(404).render("not-found")
})

server.listen(5000, () => {
    console.log("server is running")
})