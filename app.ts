
// Array

const array: Array<number> = [1, 2, 3, 4]

const stringArray: string[] = ['a', 'b', 'c']

// Adicionando e removendo elementos
const tamanhoArray = stringArray.length

console.log('Array original', array)

array.pop()

console.log('array retirando o ultimo elemento', array)

console.log('Array original', array)

array.push(5)

console.log('array com novo elemento', array)
