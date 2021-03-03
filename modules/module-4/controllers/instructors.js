const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')

exports.index = (req, res) => {

    const instructors = data.instructors.map((instructor) => {
        return {
            ...instructor,
            services: instructor.services.split(","),
        }
    })

    return res.render("instructors/index", { instructors })
}

exports.create = (req, res) => {
    return res.render("instructors/create")
}

exports.show = (req, res) => {

    const { id } = req.params

    const foundInstructor = data.instructors.find((instructor) => {
        return instructor.id == id
    })

    if (!foundInstructor) return res.send("Instructor not found!")

    const instructor = {
        ...foundInstructor,
        age: age(foundInstructor.birth),
        services: foundInstructor.services.split(","),
        created_at: new Intl.DateTimeFormat().format(foundInstructor.created_at),
    }

    return res.render('instructors/show', { instructor })
}

exports.edit = (req, res) => {

    const { id } = req.params

    const foundInstructor = data.instructors.find((instructor) => {
        return instructor.id == id
    })

    if (!foundInstructor) return res.send("Instructor not found!")

    const instructor = {
        ...foundInstructor,
        birth: date(foundInstructor.birth).iso
    }

    return res.render('instructors/edit', { instructor })
}

exports.post = (req, res) => {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") return res.send("Please, fill all fields!")
    }

    let { avatar_url, name, birth, gender, services } = req.body

    birth = Date.parse(birth)
    const created_at = Date.now()
    let id = 1
    const lastMember = data.instructors[data.instructors.length - 1]

    if (lastMember) {
        id = lastMember.id + 1
    }

    data.instructors.push({
        id,
        avatar_url,
        name, birth,
        gender,
        services,
        created_at
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send("Write file error!")

        return res.redirect('/instructors')
    })

    //return res.send(req.body)

}

exports.put = (req, res) => {
    const { id } = req.body
    let index = 0

    const foundInstructor = data.instructors.find((instructor, foundIndex) => {
        if (id == instructor.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundInstructor) return res.send("Instructor not found!")

    const instructor = {
        ...foundInstructor,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.instructors[index] = instructor

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send("Write error!")

        return res.redirect(`/instructors/${id}`)
    }) 

}

exports.delete = (req, res) => {
    const { id } = req.body

    const filteredInstructor = data.instructors.filter((instructor) => {
        return instructor.id != id
    })

    data.instructors = filteredInstructor

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) res.send("Write file error!")

        return res.redirect("/instructors")
    })
}