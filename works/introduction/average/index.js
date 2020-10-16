// Create a project that averages grades
// between students and send
// average calculation message


const student1 = 'John'
const gradeStudent1 = 9.8

const student2 = 'Jubileu'
const gradeStudent2 = 10

const student3 = 'Jorge'
const gradeStudent3 = 2

const avg = (gradeStudent1 + gradeStudent2 + gradeStudent3) / 3

if (avg >= 5) {
    console.log(`The average was ${avg} Congrats`)
}
else{
    console.log(`The average was ${avg}`)
}
