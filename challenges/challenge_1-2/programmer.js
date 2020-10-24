// Vetores e Objetos

const programmer = {
    name: "John",
    age: "22",
    technologies: [
        {
            name: "C++",
            specialty: "Desktop"
        },
        {
            name: "Python",
            specialty: "Data Science"
        },
        {
            name: "JavaScript",
            specialty: "Web/Mobile"
        }
    ]
}

const result = `The user ${programmer.name} is ${programmer.age} years old and uses ${programmer.technologies[0].name} technology with expertise in ${programmer.technologies[1].specialty}`

console.log(result)