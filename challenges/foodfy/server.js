const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const recipes = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get('/', (req, res) => {
    return res.render("home", { items: recipes })
})

server.get('/about', (req, res) => {
    return res.render("about")
})

server.get('/recipes', (req, res) => {
    return res.render("recipes", { items: recipes})
})

server.get("/recipe/:index", (req, res) => {
    const recipeIndex = req.params.index

    const recipe = recipes.find((recipe) => {
        return recipe.id == recipeIndex
    })

    return res.render("recipe", { item: recipe })
})

server.use((req, res) => {
    res.status(404).render("not-found")
})

server.listen(5000, () => {
    console.log("server is running")
})