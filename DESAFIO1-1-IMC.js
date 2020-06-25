// Cálculo de IMC

const nome = "Carlos";
const peso = 84;
const altura = 1.88;
const sexo = 'M';

// function calculaIMC(peso,altura) {
//   return ( peso / ( altura * peso ))
// }

// const imc = calculaIMC(peso, altura)

const imc = peso / ( altura ** 2 )

if (imc >=30) {
  console.log(`${nome}, você está acima do peso`)
} else {
  console.log(`${nome}, você não está acima do peso`)
}
//console.log(imc)
