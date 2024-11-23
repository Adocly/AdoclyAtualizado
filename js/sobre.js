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

