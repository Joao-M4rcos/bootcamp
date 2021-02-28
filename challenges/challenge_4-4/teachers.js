const fs = require('fs')
const data = require('./data.json')
const { age, graduation, date } = require('./utils')

//SHOW
exports.show = (req, res) => {

    const {id} = req.params

    const foundTeacher = data.teachers.find((teacher) => {
        return teacher.id == id
    })

    if (!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        level: graduation(foundTeacher.level),
        subjects: foundTeacher.subjects.split(","),
        created_at: new Intl.DateTimeFormat().format(foundTeacher.created_at)
    }

    return res.render('teachers/show', { teacher })
}

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

// EDIT
exports.edit = (req, res) => {
    
    const { id } = req.params

    const foundTeacher = data.teachers.find((teacher) => {
        return teacher.id == id
    })

    if (!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth)
    }

    return res.render('teachers/edit', { teacher })
}
