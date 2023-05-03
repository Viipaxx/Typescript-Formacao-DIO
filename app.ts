
// Objetos e interfaces

interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string, // torna a variável opcional
}

const pessoa: Pessoa = {
    nome: 'Vitor',
    idade: 32,
    profissao: 'Fullstack developer'
}

const outraPessoa: Pessoa = {
    nome: 'Igor',
    idade: 18,
    profissao: 'Design'
}

const arrayPessoa: Pessoa[] /* ...: Array<Pessoa> */ = [
    pessoa,
    outraPessoa
]

const arrayNum: number[] = [
    1, 2, 3
]

const arrayString: Array<string> = [
    '1', '2', '3'
]

console.log(arrayNum, arrayPessoa, arrayString, outraPessoa, pessoa)