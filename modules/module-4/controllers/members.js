const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')

exports.index = (req, res) => {

    const members = data.members.map((member) => {
        return {
            ...member
        }
    })

    return res.render("members/index", { members })
}

exports.create = (req, res) => {
    return res.render("members/create")
}

exports.show = (req, res) => {

    const { id } = req.params

    const foundMember = data.members.find((member) => {
        return member.id == id
    })

    if (!foundMember) return res.send("member not found!")

    const member = {
        ...foundMember,
        birth: date(foundMember.birth).birthDay
    }

    return res.render('members/show', { member })
}

exports.edit = (req, res) => {

    const { id } = req.params

    const foundMember = data.members.find((member) => {
        return member.id == id
    })

    if (!foundMember) return res.send("member not found!")

    const member = {
        ...foundMember,
        birth: date(foundMember.birth).iso
    }

    return res.render('members/edit', { member })
}

exports.post = (req, res) => {

    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") return res.send("Please, fill all fields!")
    }

    birth = Date.parse(req.body.birth)
   
    let id = 1
    const lastMember = data.members[data.members.length - 1]

    if (lastMember) {
        id = lastMember.id + 1
    }

    data.members.push({
        id,
        ...req.body,
        birth
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send("Write file error!")

        return res.redirect('/members')
    })

}

exports.put = (req, res) => {
    const { id } = req.body
    let index = 0

    const foundMember = data.members.find((member, foundIndex) => {
        if (id == member.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundMember) return res.send("member not found!")

    const member = {
        ...foundMember,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.members[index] = member

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) return res.send("Write error!")

        return res.redirect(`/members/${id}`)
    })

}

exports.delete = (req, res) => {
    const { id } = req.body

    const filteredmember = data.members.filter((member) => {
        return member.id != id
    })

    data.members = filteredmember

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) res.send("Write file error!")

        return res.redirect("/members")
    })
}