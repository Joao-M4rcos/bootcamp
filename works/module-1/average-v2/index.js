// Create a project that averages grades
// between students and send
// average calculation message

const students = [
    student01 = {
        name: "John",
        grade: 9.8
    },
    student02 = {
        name: "Jubileu",
        grade: 10
    },
    student03 = {
        name: "Jorg",
        grade: 2
    }
]

const studentsNames = ["John", "Jubileu", "Jorg"]

const avg = (students[0].grade + students[1].grade + students[2].grade) / 3

if (avg >= 5) { console.log(`The average was ${avg} Congrats`) }
else{ console.log(`The average was ${avg}`) }
