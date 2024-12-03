
function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

function fecharMenu(){
    document.getElementById("menu-bar").classList.remove("change");
    document.getElementById("nav").classList.remove("change");
    document.getElementById("menu-bg").classList.remove("change-bg");
}

function modalConta() {
    const modal = document.getElementById('janelaConta');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharModal') {
            modal.classList.remove('abrir')
        };
    })
};

function logout() {
    firebase.auth().signOut().then(() => {
        alert("Conta deslogada com sucesso!")
        window.location.href = "../index.html"
        history.replaceState(null, "", "../index.html")
    }).catch(() => {
        alert("Erro ao sair da conta.")
    })
}

const auth = firebase.auth();
document.getElementById('btnPerfil').addEventListener('click', () => {
    const user = firebase.auth().currentUser;

    if (user) {
        document.getElementById('emailConta').innerHTML = user.email;
    } else {
        document.getElementById('emailConta').innerHTML =
            'Erro: Nenhum usuário logado.';
    }
});

document.getElementById('btnPerfilRespon').addEventListener('click', () => {
    const user = firebase.auth().currentUser;

    if (user) {
        document.getElementById('emailConta').innerHTML = user.email;
    } else {
        document.getElementById('emailConta').innerHTML =
            'Erro: Nenhum usuário logado.';
    }
});

const excluirConta = document.getElementById('excluirConta')

excluirConta.addEventListener('click', () => {
    const user1 = auth.currentUser;
    if (user1) {
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


