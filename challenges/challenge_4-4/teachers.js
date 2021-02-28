const fs = require('fs')
const data = require('./data.json')

// CREATE
exports.post = (req, res) => {
    
    const keys = Object.keys(req.body)

    for (key of keys) {
        if(req.body[key] == "") return res.send("Please, fill all fields!")
    }

    let { avatar_url, name, birth, level, type_class, subjects } = req.body

    const created_at = Date.now()
    const id = Number(data.teachers.length + 1)

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        level,
        type_class,
        subjects,
        created_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if(err) res.send("Write file error!")

        return res.redirect('/teachers')
    })

}