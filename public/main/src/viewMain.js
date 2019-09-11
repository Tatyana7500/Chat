const viewMain = function () {

    this.accountName = document.getElementsByClassName("info__name")[0];
    this.accountEmail = document.getElementsByClassName("info__email")[0];
    this.logOut = document.getElementById("logOut");
    this.users = document.getElementById("getUsers");
    this.chat = document.getElementById("getChat");
    this.content = document.getElementsByClassName("content")[0];
    this.send;
    this.inputMassage;
    this.messageField;
    
    this.drawAllUsers = (users) => {
        for (let i = 0; i < users.length; i++) {
            content.innerHTML += `<div class="users__card">
                <p class="users__info">${users[i].name}</p>
                    <p class="users__info">${users[i].email}</p>
                </div>`
        }
    }

    this.usersInit = () => {
        const drawUsers = `<div class="users__title">
                    <div class="users__info">name</div>
                    <div class="users__info">e-mail</div>
                </div>`
        content.innerHTML = drawUsers;
    }

    this.chatInit = () => {
        const drawChat = `<div class="massageField"></div>
                    <div class="footer">
                        <textarea class="textMassage" placeholder="Your massage"></textarea>
                        <button class="btn footer__send">Send</button>
                    </div>`

        content.innerHTML = drawChat;
        send = document.getElementsByClassName("footer__send")[0];
        inputMassage = document.getElementsByClassName("textMassage")[0];
    }

    this.drawAllMessages = (messages) => {
        messageField = document.getElementsByClassName("massageField")[0];
        for (let i = 0; i < messages.length; i++) {
            messageField.innerHTML += `<div class="massage">
                            <p class="massage__name">${messages[i].name}</p>
                            <p class="massage__email">${messages[i].email}</p>
                            <span class="massage__text">${messages[i].message}</span>
                            <p class="massage__time">${messages[i].date}</p>
                        </div>`
        }
     }

    this.reset = () => {
        while (content.firstChild) {
            content.removeChild(content.firstChild)
        }
    }

    this.drawInitMassage = (messages) => {
        reset();
        chatInit()
        drawAllMessages(messages);
    }

    this.drawInitUsers = (users) => {
        reset();
        usersInit();
        drawAllUsers(users);
    }
};

 



