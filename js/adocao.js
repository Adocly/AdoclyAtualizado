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

function abrirModal() {
    const modal = document.getElementById('janelaModal');
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharModal1') {
            modal.classList.remove('abrir')
        };
    })
};

function abrirModal2() {
    const modal = document.getElementById('janelaModal2');
    modal.classList.add('abrir2');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharModal2') {
            modal.classList.remove('abrir2')
        };
    })
};

function abrirModal3() {
    const modal = document.getElementById('janelaModal3');
    modal.classList.add('abrir3');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharModal3') {
            modal.classList.remove('abrir3')
        };
    })
};

function abrirModal4() {
    const modal = document.getElementById('janelaModal4');
    modal.classList.add('abrir4');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharModal4') {
            modal.classList.remove('abrir4')
        };
    })
};

function abrirModal5() {
    const modal = document.getElementById('janelaModal5');
    modal.classList.add('abrir5');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharModal5') {
            modal.classList.remove('abrir5')
        };
    })
};

function abrirModal6() {
    const modal = document.getElementById('janelaModal6');
    modal.classList.add('abrir6');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharModal6') {
            modal.classList.remove('abrir6')
        };
    })
};

function abrirModal7() {
    const modal = document.getElementById('janelaModal7');
    modal.classList.add('abrir7');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharModal7') {
            modal.classList.remove('abrir7')
        };
    })
};

function abrirModal8() {
    const modal = document.getElementById('janelaModal8');
    modal.classList.add('abrir8');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharModal8') {
            modal.classList.remove('abrir8')
        };
    })
};

function abrirModal9() {
    const modal = document.getElementById('janelaModal9');
    modal.classList.add('abrir9');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharModal9') {
            modal.classList.remove('abrir9')
        };
    })
};

function abrirModal10() {
    const modal = document.getElementById('janelaModal10');
    modal.classList.add('abrir10');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharModal10') {
            modal.classList.remove('abrir10')
        };
    })
};

function abrirModal11() {
    const modal = document.getElementById('janelaModal11');
    modal.classList.add('abrir11');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharModal11') {
            modal.classList.remove('abrir11')
        };
    })
};

function abrirModal12() {
    const modal = document.getElementById('janelaModal12');
    modal.classList.add('abrir12');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharModal12') {
            modal.classList.remove('abrir12')
        };
    })
};

function abrirModal13() {
    const modal = document.getElementById('janelaModal13');
    modal.classList.add('abrir13');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharModal13') {
            modal.classList.remove('abrir13')
        };
    })
};

function abrirModal14() {
    const modal = document.getElementById('janelaModal14');
    modal.classList.add('abrir14');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fecharModal14') {
            modal.classList.remove('abrir14')
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
    const user = auth.currentUser;

    if (user) {
        document.getElementById('emailConta2').innerHTML = user.email;
    } else {
        document.getElementById('emailConta2').innerHTML =
            'Erro: Nenhum usuário logado.';
    }
});

document.getElementById('btnPerfilRespon').addEventListener('click', () => {
    const user = auth.currentUser;

    if (user) {
        document.getElementById('emailConta2').innerHTML = user.email;
    } else {
        document.getElementById('emailConta2').innerHTML =
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
                alert("Erro ao excluir a conta:", error);
            })
    }
})
