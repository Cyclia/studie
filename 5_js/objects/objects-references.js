let myAccount = {
    name: 'Michael Dijkstra',
    expenses: 0,
    income: 0
}

// Add expenses
let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

// Add Income
let addIncome = function(account, amount){
    account.income = account.income + amount
}

// resetAccount
let resetAccount = function(account){
    account.income = 0,
    account.expenses = 0
}

// getAccountSummary
let getAccountSummary = function(account){
    let balance = account.income - account.expenses
    console.log(`Hello ${account.name}! Your account has €${balance}. €${account.income} in income, €${account.expenses} in expenses.`)
}

addIncome(myAccount, 5)
addExpense(myAccount, 2.5)
addExpense(myAccount, 1)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)