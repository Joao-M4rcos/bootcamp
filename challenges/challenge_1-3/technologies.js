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

let result = 0
for(let i = 0; i < users.length; i++){
    let result = `${users[i].name} works with ${users[i].technologies[0]}, ${users[i].technologies[1]}`
    console.log(result)
}

checkIfUserUsesCSS = (user) => {
    for(let i = 0; i < user.technologies.length; i++) {
        if(user.technologies[i] == "CSS") {
            return true
        }
    }
}

for(let i = 0; i < users.length; i++) {
    const userWorksWithCSS = checkIfUserUsesCSS(users[i])

    if(userWorksWithCSS == true) {
        console.log(`The user ${users[i].name} works with CSS`)
    }
}