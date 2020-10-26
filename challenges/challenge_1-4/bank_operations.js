const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

createTransaction = (transaction) => {
    user.transactions.push(transaction)

    if (transaction.type === 'credit') { user.balance += transaction.value } 
    else { user.balance -= transaction.value }
}

getHigherTransactionByType = (type) => {
    let higherTransaction
    let higherValue = 0

    for(let transaction of user.transactions) {
        if(transaction.type == type && higherValue < transaction.value) {
            higherValue = transaction.value
            higherTransaction = transaction
        }
    }

    return higherTransaction
}

getAverageTransactionValue = () => {
    let sum = 0

    for(let u of user.transactions) {
        sum += u.value
    }

    return sum / user.transactions.length
}

getTransactionCount = () => {
    let count = {
        credit: 0,
        debit: 0
    }

    for(let u of user.transactions) {
        if(u.type == 'credit') { count.credit++ }

        else { count.debit++ }
    }

    return count
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });


console.log(user.balance)

getHigherTransactionByType('credit')
getHigherTransactionByType('debit')
console.log(getAverageTransactionValue())
getTransactionCount()


// console.log(user.balance)
