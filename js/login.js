// const email = localStorage.getItem('email');

document.querySelector('#login').addEventListener('click', function() {

    var email = document.getElementById('email').value; //variável que pega o valor do email
    const senha = document.getElementById('senha').value; //variável que pega a senha

    // AUTENTICAÇÃO DO USUÁRIO
    firebase.auth().signInWithEmailAndPassword(email, senha) //função do FIREBASE que pega o email e a senha
    .then(response => {
        alert("Usuário conectado com sucesso!"); //opcional
        window.location.href = "./html/sobre.html"; // Redireciona para index2.html
    })
    .catch(error => {
        alert("Usuário não encontrado | email ou senha incorretos"); // Mostra erro em um alert!
        console.log("Erro!", error);
    });
});
