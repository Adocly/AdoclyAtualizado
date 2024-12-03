document.getElementById('criar').addEventListener('click', function () {
  const email = document.getElementById('email').value;
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
