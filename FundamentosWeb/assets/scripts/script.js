
function verifica(){
    if(nome.value == "" || email.value == "" || assunto.value == ""){
        alert("Todos os campos são obrigatórios")
        return false
    }
    return true
}

function enviar(){
    if(verifica()){
        alert("Olá " + nome.value + "! Email enviado com sucesso")
    }
}

// Pegando a URL
function espacoMsg(){
    let location = window.location.href
    espaco.innerHTML = location
}

// Dark Theme
function darkTheme(){
    document.body.classList.toggle('dark-theme')
}