import { PeopleAccount } from './class/PeopleAccount'
import { CompanyAccount } from './class/CompanyAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Vitor', 10)
peopleAccount.deposit()

const compantAccount: CompanyAccount = new CompanyAccount('PicPay', 12)
console.log(compantAccount.deposit())