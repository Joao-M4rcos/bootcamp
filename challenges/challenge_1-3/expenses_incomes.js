const users = [
    {
        name: "Salvio",
        income: [115, 48.7, 98.3, 14.5],
        expense: [85.3, 13.5, 19.9]
    },
    {
        name: "Marcio",
        income: [24.6, 214.3, 45.3],
        expense: [185.3, 12.1, 120.0]
    },
    {
        name: "Lucia",
        income: [9.8, 120.3, 340.2, 45.3],
        expense: [450.2, 29.9]
    }
]

calcBalance = (income, expense) => {
    const balance = sumNumbers(income) - sumNumbers(expense)
    return balance
}

sumNumbers = (numbers) => {
    let sum = 0

    for(let number of numbers) {
        sum += number
    }

    return sum
}

for(let user of users) {
    const result = calcBalance(user.income, user.expense)

    if(result < 0){ console.log(`${user.name} has NEGATIVE balance of ${result.toFixed(2)}`) }
    else { console.log(`${user.name} has POSITIVE balance of ${result.toFixed(2)}`)}
}