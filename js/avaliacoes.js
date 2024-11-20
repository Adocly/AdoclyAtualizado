const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
const mensagem = document.getElementById('mensagem').value;
const btnEnviar = document.getElementById('btnEnviar');

btnEnviar.addEventListener('click', function(){
    if(nome === nome.value || email === email.value || mensagem === mensagem.value){
        alert("Mensagem enviada com sucesso!")
    }
    else{
        console.log("Erro ao mandar mensagem")
    }
})