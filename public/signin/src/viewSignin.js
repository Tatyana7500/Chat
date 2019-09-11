const ViewSignIn = function () {
    
    this.loginBtn = document.getElementById("singin_loginBtn");
    this.singInBtn = document.getElementById("singin_singInBtn");
    this.sinInEmailInput = document.getElementById("singinPageEmailInput");
    this.singInNameInput = document.getElementById("singinPageNameInput");
    this.singInPasswordInput = document.getElementById("singinPagePasswordInput");
    this.singInComfirmPasswordInput = document.getElementById("singinPageComfirmPasswordInput");
    this.singIn = document.getElementById("regAccount");
    this.modalBackground = document.getElementById("modalBackground");
    this.modalWindow = document.getElementById("modalWindow");
    this.close = document.getElementById("close");
    this.textErr = document.getElementById("typeText");

    this.handleAuthError = (errType) => {
        modalBackground.classList.toggle("visible");
        modalWindow.classList.toggle("visible");
        textErr.innerHTML = errType;

        close.onclick = () =>{
            modalBackground.classList.toggle("visible");
            modalWindow.classList.toggle("visible");
        }
    }
};