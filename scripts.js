const form = document.getElementById("userForm")
const userName = document.getElementById("name")
const userMail = document.getElementById("email") 
const userPassword = document.getElementById("password") 
const welcomeMsg = document.getElementById("message")

form.addEventListener("submit", (event) =>{
    event.preventDefault()
    if (userName.value.trim() === ""){
        welcomeMsg.textContent = "Entrer votre nom"
    }else if (userName.value.trim().length < 3){
        welcomeMsg.textContent = "Nom trop court"
    }else if(userMail.value.trim() === ""){
        welcomeMsg.textContent = "Entrer votre email"
    }else if (!userMail.checkVisibility()){
        welcomeMsg.textContent = "Entrer un mail correct"
    }else if(userPassword.value.trim().length < 8){
        welcomeMsg.textContent = "Entrer un mot de robuste, d'au moins 8 caractères"
    }