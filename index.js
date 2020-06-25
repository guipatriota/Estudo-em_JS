/******************************************************************************
* Aula prática 1:
******************************************************************************/
// const name = 'Guilherme Bootcamp' // fechar com ; é facultativo no JS
// // const indica que a variável não pode mais mudar de conteúdo.
// console.log(name)

/******************************************************************************
* Aula prática 2 e 3:
******************************************************************************/
// Vamos criar um programa que calcula a média
// das notas entre os alunos e envia
// mensagem do cálculo da média

// const name = "Guilherme" // Criamos assim uma string
// const name2 = 'Suelen' // Criamos assim uma string com outra forma
// const name3 = `Fred, ${name} e ${name2}` /** Com as apóstrofes podemos criar uma 
// * template string, que aceita chamada de outras variáveis internamente, com o 
// * uso do operador ${} */
// const name4 = "teste ed ${name}" // Desta forma o ${} é interpretado como texto

// console.log(name3)
// console.log(name4)
// console.log(typeof name4)

// Fazendo o programa simples de nota:
// const aluno01 = "Guilherme"
// const notaAluno01 = 9.8

// const aluno02 = 'Mayk'
// const notaAluno02 = 10

// const aluno03 = 'Diogo'
// const notaAluno03 = 2

// const media = (notaAluno01 + notaAluno02 + notaAluno03) / 3

// // Se a média for maior que 5, parabenizar a tuma
// if (media > 5) {
//   // parabenizar a turma
//   console.log(`A média da turma foi de ${media}. Parabéns!`)
// } else {
//   // Caso a média seja menor que 5, faze:
//   console.log('A média foi menor que 5')
// }
// console.log(media)

/** AULA 4:
 * Estudo dos operadores de comparação do JS:
 * > Maior que
 * < Menor que
 * >= Maior igual
 * <= Menor igual
 * == Igua a
 * === Igual e do mesmo tipo
 * != Diferente de
 * !== Diferente, inclusive do tipo
 ************************************************/
// true | false (boolean)
//  console.log( 5 > 4 ) // true
//  console.log( 5 < 4 ) // false
//  console.log( 5 >= 4 ) // true
//  console.log( 5 <= 4 ) // false
//  console.log( 4 <= 4 ) // true
//  console.log( 4 == 4 ) // true
//  console.log( 4 == 4 ) // true
//  console.log( '4' == 4 ) // true - Pois comparou a string 4 com o number 4 e ambos são iguais excluindo o typeof
//  console.log( '4' != 4 ) // false - Pois comparou a string 4 com o number 4 e ambos são iguais excluindo o typeof
//  console.log( '4' === 4 ) // false - Diferentes pois o typeof é diferente
//  console.log( '4' !== 4 ) // true - Diferentes pois o typeof é diferente
//  console.log( 4 !== 4 ) // false - Pois ambos são exatamente iguais, incluindo o typeof

// DESAFIO 1
// Veificar se a pessoa é maior igual a 18 anos
//  const age = 16
//  // Se sim, deixar entrar. Se não, bloquear entrada.
//  if (age >= 18) {
//   console.log('A pessoa pode entrar')
//  } else if (age === 17) {
//   console.log('Pessoa bloqueada. Por favor, retorne quando fizer 18 anos') // se a pessoa tiver 17 anos, avisar para volta quando fizer 18 anos
//  } else {
//   console.log('Pessoa bloqueada.')
//  }
 // OU:
//  const age = 19

//  if (age >= 18) {
//    console.log('Deixar entrar')
//  } else {
//    console.log('Bloquear a entrada')
//  }
//  // se a pessoa tiver 17 anos, avisar para volta quando fizer 18 anos
// if (age ===17) {
//   console.log('Volte quando tiver 18')
// }
/** ===========================================================================
      OPERADORES LÓGICOS:
      
      &&  "E"   As duas condições devem ser verdadeiras paa que a condição
                final seja verdadeira.
      ||  "OU"  Uma das condições deve ser verdadeira para que a ondição
                final seja verdadeira.
      !   "NÃO" Nega uma condição
==============================================================================*/
//  console.log(5 == 5 && 6 == 6) // true
//  console.log(5 == 5 && 6 != 6) // false

//  console.log(5 != 5 || 6 == 6) // true
//  console.log(5 == 5 || 6 != 6) // true

//  console.log(!(5 > 6)) // true
//  console.log(!(5 < 6)) // false

// EXEMPLO NO DESAFIO ANTERIOR:
// Veificar se a pessoa é maior igual a 18 anos
// const age = 18
//  // Se sim, deixar entrar. Se não, bloquear entrada.
//  if (!(age >= 18) || age === 17) {
//   console.log(`Pessoa bloqueada. ${(age === 17 ? "Volte quando tiver 18." : "" )}`)
//  } else {
//   console.log('A pessoa pode entrar.')
//  }

/** ============================================================================
 * 
 *    OPERADORES ARITMÉTICOS
 *    
 *    *   Multiplicação
 *    /   Divisão
 *    %   Resto da divisão
 *    +   Adição
 *    -   Subtração
 * 
   ===========================================================================*/

//  console.log(2 * 2) // 4
//  console.log(2 / 2) // 1
//  console.log(2 % 1.5) // 0.5
//  console.log(2 + 2) // 4
//  console.log(2 - 2) // 0


/** Conceito de objeto
 * Cada objeto é declarado usando chaves para definir os valores da variável,
 * transformado ela em um objeto.
 * Dentro das chaves, criamos os MÉTODOS (FUNCIONALIDADES que existirão dentro do
 * objeto, como nome, nota, etc.).
 * Sendo assim, um objeto é uma coleção de propriedades que recebem valores ou
 * funcionalidades.
 */
// const aluno01 = {
//       nome: "Guilherme",
//       nota: 9.8
// }
// const aluno02 = {
//       nome: "Mayk",
//       nota: 10
// }
// const aluno03 = {
//       nome: "Diego",
//       nota: 2
// }
// const media = (aluno01.nota + aluno02.nota + aluno03.nota) / 3

/**   Também podemos criar ARRAYs com abjetos, usando os colchetes [] para cada
*     elemento (objeto) e separando eles por vírgula: */

// const alunos = [
//       {
//             nome:"Guilherme",
//             nota: 9.8
//       },
//       {
//             nome: "Mayk",
//             nota: 10
//       },
//       {
//             nome: "Diego",
//             nota: 2
//       }

// ] // temos aqui uma coleção de objetos, ou array ou vetor.


// const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
// console.log(media)

// const nomeDeAlunos = ["Guilherme", "Mayk", "Diego"]

// console.log(nomeDeAlunos)
// console.log(alunos)
// console.log(alunos[1])

/**   Funções simples no JS: */
// const alunosDaTurmaA = [
//       {
//             nome:"Guilherme",
//             nota: 9.8
//       },
//       {
//             nome: "Mayk",
//             nota: 0
//       },
//       {
//             nome: "Diego",
//             nota: 2
//       }
// ]

// const alunosDaTurmaB = [
//       {
//             nome:"Fulano",
//             nota: 5
//       },
//       {
//             nome: "Suelen",
//             nota: 10
//       },
//       {
//             nome: "Marina",
//             nota: 10
//       }
// ]

// // Criar uma função para calcular a média:
// function calculaMedia(alunos) {
//       return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
// }

// const media1 = calculaMedia(alunosDaTurmaA)
// const media2 = calculaMedia(alunosDaTurmaB)

// function enviaMensagem(media, turma) {
//       // Se amédia for maior que 5, parabenizar a turma
//       if (media > 5) {
//             console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
//       } else {
//             console.log(`A média da ${turma} é menor que 5`)
//       }
// }

// enviaMensagem(media1, 'turma A')
// enviaMensagem(media2, 'turma B')

// console.log() // objeto CONSOLE com método LOG que aceita diversos PARÂMETROS

// ESTRUTURA DE REPETIÇÃO:
// Como fazer quando as turmas possuem número diferente de alunos?

const alunosDaTurmaA = [
      {
            nome:"Guilherme",
            nota: 1.8
      },
      {
            nome: "Mayk",
            nota: 10
      },
      {
            nome: "Diego",
            nota: 2
      },
      {
            nome: "Teste aluno novo",
            nota: 10
      }
]

const alunosDaTurmaB = [
      {
            nome:"Fulano",
            nota: 5
      },
      {
            nome: "Suelen",
            nota: 10
      },
      {
            nome: "Marina",
            nota: 10
      },
      {
            nome: 'Aluno Novo',
            nota: 5.5
      }
]

// Criar uma função para calcular a média:
function calculaMedia(alunos) {
      let soma = 0
      for (let i = 0; i < alunos.length; i++) {
            
            soma = soma + alunos[i].nota
      }
      const media = soma / (alunos.length)
      return (media)
}

const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

function enviaMensagem(media, turma) {
      // Se amédia for maior que 5, parabenizar a turma
      if (media > 5) {
            console.log(`A média da ${turma} foi de ${media}. Parabéns!`)
      } else {
            console.log(`A média da ${turma} é menor que 5`)
      }
}

enviaMensagem(media1, 'turma A')
enviaMensagem(media2, 'turma B')