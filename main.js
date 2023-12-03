const form = document.getElementById('check-form')

function numValidation(fieldA, fieldB) {
    const firstNum = parseInt(fieldA)
    const secondNum = parseInt(fieldB)
    return secondNum > firstNum
}

form.addEventListener('submit', function(e) {
    
    let formValido = false
    e.preventDefault() // por padrão, o submit está desabilitado.
    
    const valorA = document.getElementById('field-1')
    const valorB = document.getElementById('field-2')
    const mensagemSucesso = `O valor do campo A: <b>${valorA.value}</b> é menor que o valor do campo B: <b>${valorB.value}</b>. Campos validados com sucesso!`


    formValido = numValidation(valorA.value, valorB.value)

    if (formValido) {
        const containerMensagemSucesso = document.querySelector('.success-message')
        containerMensagemSucesso.innerHTML = mensagemSucesso
        containerMensagemSucesso.style.display = 'block'

        valorA.value = ''
        valorB.value = ''
    } else {
        valorA.style.border = '1px solid red'
        valorB.style.border = '1px solid red'
        document.querySelector('.error-message').style.display = 'block'
    }
})

console.log(form)

