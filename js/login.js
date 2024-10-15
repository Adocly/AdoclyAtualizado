const email = document.getElementById("email")
const senha = document.getElementById("senha")
const login = document.getElementById("login")

email.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    login.disabled = false;

    if(value === ""){
        login.disabled = true;
    }
})

senha.addEventListener("keyup", (e) => {
    const value = e.currentTarget.value;
    login.disabled = false;

    if(value === ""){
        login.disabled = true;
    }
})