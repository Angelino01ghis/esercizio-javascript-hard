function validate(){
    var email = document.getElementById('email')
    var password = document.getElementById('password')
    var errorBox = document.getElementById('errorMessage')

    email.style.border = "1px solid #ccc";
    password.style.border = "1px solid #ccc";
    errorBox.innerHTML = "";
}
    if(email.value === ""){
    errorBox.innerHTML = "<strong> Errore. </strong> Reinserisci la tua email.";
    email.style.border = "3px solid #990033" ;
    email.focus();
    return false
    }
    if (password.value === "") {
    errorBox.innerHTML = "<strong>Errore:</strong> Inserisci la tua password.";
    password.style.border = "3px solid #990033";
    password.focus();
    return false;
    }
    if(password.value.length < 8) {
    errorBox.innerHTML = "<strong> Errore. <strong/> La tua passord deve essere lunga almeno 8 caratteri";
    password.style.border = "3px solid #990033" ;
    password.focus();
    return false
    }
    return true