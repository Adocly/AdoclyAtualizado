document.querySelector('#login').addEventListener('click', function () {

    var email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(response => {
            alert("Usuário conectado com sucesso!");
            window.location.href = "./html/sobre.html";
        })
        .catch(error => {
            alert("Usuário não encontrado | email ou senha incorretos");
            console.log("Erro!", error);
        });
});

//Visualizador de senha

const visualizar = document.getElementById('visualizarSenha');
const Vsenha =  document.getElementById('senha');

visualizar.addEventListener('click', function(){

    if(Vsenha.type === "password"){
        Vsenha.setAttribute('type','text')
        visualizar.classList.replace('bi-eye','bi-eye-slash')
    }
    else{
        Vsenha.setAttribute('type','password')
        visualizar.classList.replace('bi-eye-slash','bi-eye')
    }
})
