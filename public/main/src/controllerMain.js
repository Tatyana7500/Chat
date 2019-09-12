const MainController = function (model, view) {
    const _view = view;
    const _model = model;

    _view.users.addEventListener('click', event => {
        _model.getUsers(_view.drawInitUsers);
    });

    _view.chat.addEventListener('click', event => {
        _model.getMessages(_view.drawInitMassage);

        // setTimeout( () =>
        // _view.sendMessage.addEventListener('click', event => {
        //     const message = getAuthData();
        //   _model.addMessages(message, _view.drawInitMassage);
        // }), 1000);
    });

    function sendMessage() {
        const message = getAuthData();
        _model.addMessages(message);
    }

    _view.logOut.addEventListener('click', event => {
        localStorage.removeItem('chat');
        _view.goToLoginPage();
    });

    this.init = () => {
        const user = localStorage.getItem('chat');

        if (user) {
            _view.drawDataUser(JSON.parse(user));
            _model.getUsers(_view.drawInitUsers);
        } else {
            _view.goToLoginPage();
        }
    };

    function getAuthData() {
        return new Messages(_view.accountName.innerHTML, _view.accountEmail.innerHTML, _view.inputMessage.value, new Date().toISOString().split('T')[0]);
    }

    _view.content.addEventListener('click',  addListener);

    function addListener (event) {
        if (event.target.className === 'btn footer__send') {
            const message = getAuthData();
            _model.addMessages(message, _view.drawInitMassage);
            _view.content.removeEventListener('click',  addListener);
        }

        _view.content.addEventListener('click',  addListener);
    }
};