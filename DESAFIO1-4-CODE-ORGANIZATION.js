// Software to manage balence and limit for bank account

// User initialization:
const user = {
  name: "Maria",
  transactions: [],
  balance: 0,
  limit: 10.0
}
// Display initial user´s status
console.table(user)

// Verify credit limits:
function limitVerify(user, value) {
  if (user.balance+user.limit >= value) {
    return true
  } else {
    console.log(`Error 1: Limit exceeded.`)
    return false}
}

// Create bank transaction and calculate new balance
function createTransaction (user, transaction) {
  if (transaction.type == 'credit') {
    user.balance += transaction.value
  } else if (transaction.type == 'debit') {
    if(limitVerify(user, transaction.value)) {
      user.balance -= transaction.value
    } else {
      return
    }
  } else {
    console.log(`Error 0: Transaction type ${transaction.type} doesn´t exist.`)
    return
  }
  user.transactions.push(transaction)
}

/**=============================================================================
 *                            REPORTS:                                          
 * ===========================================================================*/

// getHigherTransactionByType - Filter transactions with higher value by type.

function getHigherTransactionByType(user, type) {
  if (type == 'credit' || type == 'debit'){
    let higherValue = {type: type, value: 0}

    for(let transaction of user.transactions) {   
      if(transaction.type == type && transaction.value >= higherValue.value) {
        higherValue.value = transaction.value
      }
    }

    return higherValue

  } else {
    console.log(`Error 2: Type ${type} doesn´t exist. Please enter 'credit' or 'debit'.`)
    return ({type: type, value: "Transaction undefined"})
  }
}

// getAverageTransactionValue - Shows average value of all transactions.
function getAverageTransactionValue(user){
  let sum = 0
  for (let transaction of user.transactions) {
    sum += transaction.value
  }
  return (sum / user.transactions.length)
}

// getTransactionsCount - Shows the number of each type of transaction.
function getTransactionsCount (user) {
  let counter = {
    credit: 0,
    debit: 0
  }
  for (let transaction of user.transactions) {
    if (transaction.type == 'credit') {
      counter.credit += 1 
    } else if (transaction.type == 'debit') {
      counter.debit += 1 
    }
  }
  return counter
}


createTransaction(user, {type: 'credit', value: 50})
createTransaction(user, {type: 'credit', value: 120.0})
createTransaction(user, {type: 'debit', value: 80.0})
createTransaction(user, {type: 'creddit', value: 10.0})
createTransaction(user, {type: 'debit', value: 30})

// Display final user´s status
console.table(user)

console.log(user.balance); // 60

console.log(getHigherTransactionByType(user, "credit")) // { type: 'credit', value: 120 }
console.log(getHigherTransactionByType(user, "debit") )// { type: 'debit', value: 80 }

console.log(getAverageTransactionValue(user)) // 70

console.log(getTransactionsCount(user)) // { credit: 2, debit: 2 }