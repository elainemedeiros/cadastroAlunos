import { Aluno } from './aluno.js'


const inputNomeAluno = document.getElementById("nomeAluno")
const inputMatricula = document.getElementById("matriculaAluno")
const inputNota1 = document.getElementById("nota1")
const inputNota2 = document.getElementById("nota2")
const inputNota3 = document.getElementById("nota3")
const formulario = document.querySelector("form")
const tabelaAlunos = document.querySelector(".tabelaAlunos")
const botaoDeleta = document.getElementById("deleta")

function createAluno() {
    let aluno = new Aluno(inputNomeAluno.value, inputMatricula.value, inputNota1.value, inputNota2.value, inputNota3.value)

    const tr = document.createElement('tr')
    tr.setAttribute('class', 'lista')
    tabelaAlunos.appendChild(tr)

    const tdNome = document.createElement('td')
    tdNome.setAttribute('id', 'nomeAluno')
    tdNome.innerText = aluno.getNome()
    tr.appendChild(tdNome)

    const tdMatricula = document.createElement('td')
    tdMatricula.setAttribute('id', 'matricula')
    tdMatricula.innerText = aluno.getMatricula()
    tr.appendChild(tdMatricula)

    const tdNota1 = document.createElement('td')
    tdNota1.setAttribute('id', 'nota1')
    tdNota1.innerText = aluno.getNota1()
    tr.appendChild(tdNota1)

    const tdNota2 = document.createElement('td')
    tdNota2.setAttribute('id', 'nota2')
    tdNota2.innerText = aluno.getNota2()
    tr.appendChild(tdNota2)

    const tdNota3 = document.createElement('td')
    tdNota3.setAttribute('id', 'nota3')
    tdNota3.innerText = aluno.getNota3()
    tr.appendChild(tdNota3)

    const tdMedia = document.createElement('td')
    tdMedia.setAttribute('id', 'media')
    tdMedia.innerText = aluno.calculaMedia()
    tr.appendChild(tdMedia)

    const tdBtnDeletaAluno = document.createElement('td')
    tdBtnDeletaAluno.innerHTML = '<i class="fa-solid fa-delete-left delete" style="cursor: pointer;" title="Apagar aluno"></i>'
    tr.appendChild(tdBtnDeletaAluno)
    

    deletaAluno()
}

function deletaAluno() {
    const botoesDeletar = document.querySelectorAll('i.delete')
    botoesDeletar.forEach(button => {
        button.addEventListener('click', () => {
            const linhasRemovidas = button.closest('tr')
            linhasRemovidas.remove()
        })
    })
}

function deletarTodos() {
    tabelaAlunos.innerHTML = ''
}

formulario.onsubmit = function (event) {
    event.preventDefault()
    createAluno();
}

botaoDeleta.onclick = function() {
    let confirma = confirm('Apagar todos os registros?')
    if(confirma) {
        deletarTodos()
    }
}




