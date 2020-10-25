// Vetores e Objetos

const enterprise = {
    name: "Rocketseat",
    color: "purple",
    focus: "Programming",
    address: {
        street: "Rua Guilherme Gembala",
        number: "260"
    }
}

const result = `The enterprise ${enterprise.name} is located in ${enterprise.address.street}, ${enterprise.address.number}`

console.log(result)