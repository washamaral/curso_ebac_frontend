
alunos = {
    nome: ['Joao', 'Maria', 'Antonio', 'Marta', 'Luis', 'Angela'],
    nota: [10,8,6,7,4,6]
}

console.log(alunos)


function passouNaMateria(student) {
    names = student.nome
    grades = student.nota
    congratulations = ''
    
    grades.forEach(function(item, index) {
        if (item >= 6) {
            congratulations = names[index]
            console.log(`${alunos.nome[index]} passou na prova`)
        }
    })
}


console.log('============================')

passouNaMateria(alunos)
