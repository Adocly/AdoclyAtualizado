const email = document.querySelector("#email")
const senha = document.querySelector("#senha")
const login = document.querySelector("#login")

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