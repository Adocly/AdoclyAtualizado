document.getElementById('criar').addEventListener('click', function() {
  const email = document.getElementById('email').value; //variável que pega o valor do email
  const senha = document.getElementById('senha').value;

firebase.auth().createUserWithEmailAndPassword(email, senha)
.then((userCredential) => {
    alert("Cadastro realizado com sucesso! Bem-vindo, " + email);
    window.location.href = "./sobre.html"
})
.catch((error) => {
    alert("Erro ao cadastrar: " + error.message);
});
});
