
//  POO

class User {
    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    showName = () => {
        console.log(this.name)
    }
}

const user = new User('Vitor', 19)
user.showName()

const otherUser = new User('Igor', 18)
otherUser.showName()
