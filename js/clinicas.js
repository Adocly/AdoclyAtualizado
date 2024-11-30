function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

function modalConta(){
    const modal = document.getElementById('janelaConta');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'fecharModal'){
            modal.classList.remove('abrir')
        };
    })
};
const auth = firebase.auth();
document.getElementById('btnPerfil').addEventListener('click', () => {
 const user = auth.currentUser;

if (user) {
    document.getElementById('emailConta2').textContent =  user.email;
} else {
document.getElementById('emailConta2').textContent = 
    'Erro: Nenhum usuário logado.';
}
    });

    const excluirConta = document.getElementById('excluirConta')

excluirConta.addEventListener('click', () =>{
    const user1 = firebaseAuth.currentUser;
    if(user1){
        user1.delete()
        .then(() => {
          alert("Conta excluída com sucesso.");
          window.location.href = "../index.html"
          history.replaceState(null, "", "../index.html")
        }).catch((error) => {
            console.error("Erro ao excluir a conta:", error);
        })
    }
})