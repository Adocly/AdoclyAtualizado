function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

  document.getElementById('btnPerfil').addEventListener('click', () => {
    const user = auth.currentUser;

    if (user) {
        document.getElementById('emailConta').textContent = user.email;
        alert(user.email); // Mover o alert para dentro
    } else {
        document.getElementById('emailConta').textContent = 
            'Erro: Nenhum usuário logado.';
    }
});
