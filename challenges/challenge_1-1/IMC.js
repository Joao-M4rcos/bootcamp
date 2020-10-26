const name = "Carlos"
const weight = 84
const height = 1.88

const imc = height / (weight * weight)

if(imc >= 30) { console.log(`Carlos you're overweight: ${imc}`) }
else { console.log(`Carlos you're not overweight: ${imc}`) }