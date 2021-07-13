const nome = 'André leite'
const idade = 24
const peso = 95
const altura = 1.86
let anoNascimento;
anoNascimento = 2021 - idade;
let imc;
imc = peso / (altura * altura);

console.log(`${nome} tem ${idade} anos, pesa ${peso} Kg tem ${altura} de altura e seu IMC é ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)
