// Create a project that averages grades
// between classes and send
// average calculation message

const classA = [
    {
        name: "John",
        grade: 10
    },
    {
        name: "Jubileu",
        grade: 1
    },
    {
        name: "Jane",
        grade: 1
    }
]

const classB = [
    {
        name: "Alice",
        grade: 6
    },
    {
        name: "Lara",
        grade: 7
    },
    {
        name: "Benedict",
        grade: 10
    },
    {
        name: "Hanna",
        grade: 5
    }
]

calcAvg = (students) => {
    let sum = 0
    for(let i = 0; i < students.length; i++) {
        sum += students[i].grade
    }
    avg = sum / students.length
    return avg
}

const avg1 = calcAvg(classA)
const avg2 = calcAvg(classB)

sendMessage = (avg) => {
    if (avg >= 5) {
        console.log(`The class average was ${avg}. Congrats!`)
    }
    else{
        console.log(`The class average was less than 5: ${avg}.`)
    }
}

sendMessage(avg1, 'classA')
sendMessage(avg2, 'classB')