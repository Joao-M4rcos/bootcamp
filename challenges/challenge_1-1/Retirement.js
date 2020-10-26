const name = "Silvana"
const sex = "F"
const age = 48
const contribution = 23

const contributionCalc = age + contribution

const manCanRetire = sex == 'M' && contribution >= 35 && contributionCalc >= 95
const womanCanRetire = sex == 'F' && contribution >= 30 && contributionCalc >= 85

if(manCanRetire || womanCanRetire) { console.log(`${name}, you can retire.`) }
else { console.log(`${name}, you can't retire.`) }