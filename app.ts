import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Vitor', 10)
// console.log(peopleAccount)
// peopleAccount.deposit()

const compantAccount: CompanyAccount = new CompanyAccount('PicPay', 12)
// compantAccount.deposit()
console.log(compantAccount)