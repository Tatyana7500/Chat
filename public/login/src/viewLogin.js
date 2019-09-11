const ViewLogin = function () {

    this.loginBtn = document.getElementById("loginBtn");
    this.singInBtn = document.getElementById("singInBtn");
    this.emailInput = document.getElementById("loginPageEmailInput"); 
    this.passwordInput = document.getElementById("loginPagePasswordInput");
    this.modalBackground = document.getElementById("modalBackground");
    this.modalWindow = document.getElementById("modalWindow");
    this.close = document.getElementById("close");
    this.textErr = document.getElementById("typeText");
    this.auth = document.getElementById("enterAccount");

    this.handleAuthError = (errType) => {
        modalBackground.classList.toggle("visible");
        modalWindow.classList.toggle("visible");
        textErr.innerHTML = errType;

        close.onclick = () => {
            modalBackground.classList.toggle("visible");
            modalWindow.classList.toggle("visible");
        }
    }
};


