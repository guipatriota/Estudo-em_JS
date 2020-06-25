/******************************************************************************
* Practice class 1:
******************************************************************************/
// const name = 'Guilherme Bootcamp' // to end with ; is optional for JS
// // const means that the variable can´t be changed.
// console.log(name)

/******************************************************************************
* Practice class 2 and 3:
******************************************************************************/
// Create software for average calculations
// for grades between students and send
// message content the average calculated.

// const name = "Guilherme" // String created
// const name2 = 'Suelen' // Another form to create strings
// const name3 = `Fred, ${name} e ${name2}` /** Com as apóstrofes podemos criar uma 
// * template string, que aceita chamada de outras variáveis internamente, com o 
// * uso do operador ${} */
// const name4 = "teste ed ${name}" // Desta forma o ${} é interpretado como texto

// console.log(name3)
// console.log(name4)
// console.log(typeof name4)

// Fazendo o programa simples de grade:
// const student01 = "Guilherme"
// const gradestudent01 = 9.8

// const student02 = 'Mayk'
// const gradestudent02 = 10

// const student03 = 'Diogo'
// const gradestudent03 = 2

// const average = (gradestudent01 + gradestudent02 + gradestudent03) / 3

// // Se a média for maior que 5, parabenizar a tuma
// if (average > 5) {
//   // parabenizar a class
//   console.log(`A média da class foi de ${average}. Parabéns!`)
// } else {
//   // Caso a média seja menor que 5, faze:
//   console.log('A média foi menor que 5')
// }
// console.log(average)

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
 * objeto, como name, grade, etc.).
 * Sendo assim, um objeto é uma coleção de propriedades que recebem valores ou
 * funcionalidades.
 */
// const student01 = {
//       name: "Guilherme",
//       grade: 9.8
// }
// const student02 = {
//       name: "Mayk",
//       grade: 10
// }
// const student03 = {
//       name: "Diego",
//       grade: 2
// }
// const average = (student01.grade + student02.grade + student03.grade) / 3

/**   Também podemos criar ARRAYs com abjetos, usando os colchetes [] para cada
*     elemento (objeto) e separando eles por vírgula: */

// const students = [
//       {
//             name:"Guilherme",
//             grade: 9.8
//       },
//       {
//             name: "Mayk",
//             grade: 10
//       },
//       {
//             name: "Diego",
//             grade: 2
//       }

// ] // temos aqui uma coleção de objetos, ou array ou vetor.


// const average = (students[0].grade + students[1].grade + students[2].grade) / 3
// console.log(average)

// const nameDestudents = ["Guilherme", "Mayk", "Diego"]

// console.log(nameDestudents)
// console.log(students)
// console.log(students[1])

/**   Funções simples no JS: */
// const classAStudents = [
//       {
//             name:"Guilherme",
//             grade: 9.8
//       },
//       {
//             name: "Mayk",
//             grade: 0
//       },
//       {
//             name: "Diego",
//             grade: 2
//       }
// ]

// const classBStudents = [
//       {
//             name:"Fulano",
//             grade: 5
//       },
//       {
//             name: "Suelen",
//             grade: 10
//       },
//       {
//             name: "Marina",
//             grade: 10
//       }
// ]

// // Criar uma função para calcular a média:
// function calculateAverage(students) {
//       return (students[0].grade + students[1].grade + students[2].grade) / 3
// }

// const average1 = calculateAverage(classAStudents)
// const average2 = calculateAverage(classBStudents)

// function sendMessage(average, class) {
//       // Se amédia for maior que 5, parabenizar a class
//       if (average > 5) {
//             console.log(`A média da ${class} foi de ${average}. Parabéns!`)
//       } else {
//             console.log(`A média da ${class} é menor que 5`)
//       }
// }

// sendMessage(average1, 'class A')
// sendMessage(average2, 'class B')

// console.log() // objeto CONSOLE com método LOG que aceita diversos PARÂMETROS

// ESTRUTURA DE REPETIÇÃO:
// Como fazer quando as classes possuem número diferente de estudantes?

const classAStudents = [
      {
            name: "Guilherme",
            grade: 10
      },
      {
            name: "Mayk",
            grade: 10
      },
      {
            name: "Diego",
            grade: 2
      },
      {
            name: "Teste student novo",
            grade: 1.8
      }
]

const classBStudents = [
      {
            name: "Fulano",
            grade: 5
      },
      {
            name: "Suelen",
            grade: 10
      },
      {
            name: "Marina",
            grade: 10
      },
      {
            name: 'student Novo',
            grade: 2.5
      }
]

// Criar uma função para calcular a média:
function calculateAverage(students) {
      let sum = 0
      
      for (let i = 0; i < students.length; i++) {

            sum = sum + students[i].grade
      }
      const average = sum / (students.length)
      
      return (average)
}

function sendMessage(average, studentClass) {
      // Se a média for maior que 5, parabenizar a class
      if (average > 5) {
            console.log(`The average of ${studentClass} was ${average}. Congratulations!`)
      } else {
            console.log(`The average of ${studentClass} is lower than 5.`)
      }
}

// Estudo de BOOLEANS
// Mark student as flunked if grade is lower than 5 and also send
// a message.

function markAsFlunked(student) {
      student.flunked = false
      
      if (student.grade < 5) {
            student.flunked = true
      }
}


function sendflunkedMessage(student, studentClass) {
      if (student.flunked) {
            console.log(`The student ${student.name} in ${studentClass} flunked!`)
      }
}

function studentsflunked(students, studentClass) {
      for (let student of students) {
            markAsFlunked(student)
            sendflunkedMessage(student, studentClass)
      }
      //console.table(students)
}

const average1 = calculateAverage(classAStudents)
const average2 = calculateAverage(classBStudents)

sendMessage(average1, "class A")
sendMessage(average2, "class B")

studentsflunked(classAStudents, "class A")
studentsflunked(classBStudents, "class B")