
class Account {

    name: string
    accountNumber: number
    balance: number

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
        this.balance = 10.50
    }

    deposit = () => {
        console.log('Você depositou!')
    }

    withdraw = () => {
        console.log('Você sacou!')
    }

}

const newAccount: Account = new Account('Vitor', 1)
console.log(newAccount)

const account: Account = new Account('Igor', 28)
account.deposit()