document.querySelector('#login').addEventListener('click', function() {

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
