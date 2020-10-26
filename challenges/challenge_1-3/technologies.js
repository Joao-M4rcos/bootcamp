const users = [
    {
        name: "Carlos",
        technologies: ["HTML", "CSS"]
    },
    {
        name: "Jasmine",
        technologies: ["JavaScript", "CSS"]
    },
    {
        name: "Tuane",
        technologies: ["HTML", "Node.js"]
    }
]

for(let user of users){
    let result = `${user.name} works with ${user.technologies.join(', ')}`

    console.log(result)
}

checkIfUserUsesCSS = (user) => {
    for(let technology of user.technologies) {
        if(technology == "CSS") return true
    }
}

for(let i = 0; i < users.length; i++) {
    const userWorksWithCSS = checkIfUserUsesCSS(users[i])

    if(userWorksWithCSS == true) { console.log(`The user ${users[i].name} works with CSS`) }
}