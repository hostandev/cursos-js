// tipos string

const nome = "Javascript"

console.log("Linguagem: " + nome)

const saudacao = "Hello World"
console.log(saudacao)

const ano = "2023"
console.log("Ano " + ano)

const citacao = 'Como diria Carl Sagam: "Se vc quiser fazer um torta de maçã do zero, terá que construir o universo"'

console.log(citacao)

// concatenação x soma

const valor1 = 1
const valor2 = "2"

console.log(valor1 + valor2)
console.log(valor2 + valor2)
console.log(valor1 + valor1)

// Codificação de String

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// trabalhando com string

const nome1 = "paulo"
const nome2 = "paulo"

console.log("Os nomes são iguais?: " + (nome1 == nome2))
console.log("Os nomes são iguais?: " + (nome1 === nome2))

const nome3 = "Paulo"
console.log("Os nomes são iguais?: " + (nome1 === nome3.toLowerCase()))

const nome4 = "paulo js"
console.log("Qtde de caracteres: " + (nome4.length))