const nome = "Juliana";
const idade = 30;
const cidade = "São Paulo";
const profissao = "Programadora"

console.log(nome + ", idade " + idade + " anos. " + 
    "Nascida em " + cidade + ". Profissão " + profissao + ".");

const primeiraTemplate = `${nome}, idade ${idade} anos. Nascida em ${cidade}.` +
    ` Profissão ${profissao}.`;
console.log(primeiraTemplate);