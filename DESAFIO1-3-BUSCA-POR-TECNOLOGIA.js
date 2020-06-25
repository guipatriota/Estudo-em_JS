// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o 
// usuário trabalha com CSS ou não. Essa função deve retornar um boolean
// true/false.

const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
]

function checaSeUsuariosUsaCss(usuario) {
  for (i = 0; i < usuario.tecnologias.length; i++) {
    if (usuario.tecnologias[i] == "CSS")
      return true
  }
  return false
}

//console.log(checaSeUsuariosUsaCss(usuarios[0]))

// Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha 
// com CSS utilizando a função construída acima, se SIM, imprima em tela as 
// informações do usuário:

for (c = 0; c < usuarios.length; c++) {
  if (checaSeUsuariosUsaCss(usuarios[c])) {
    console.log(`O usuário ${usuarios[c].nome} trabalha com CSS`)
  }  
}