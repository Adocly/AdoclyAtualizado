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

function logout(){
    firebase.auth().signOut().then(() => {
        alert("Conta deslogada com sucesso!")
        history.replaceState(null, "", "../index.html")
                }).catch(() => {
        alert("Erro ao sair da conta.")
    })
  }

  
       const auth = firebase.auth();
        document.getElementById('btnPerfil').addEventListener('click', () => {
         const user = auth.currentUser;

        if (user) {
            document.getElementById('emailConta').textContent =  user.email;
        } else {
        document.getElementById('emailConta').textContent = 
            'Erro: Nenhum usuário logado.';
        }
            });
