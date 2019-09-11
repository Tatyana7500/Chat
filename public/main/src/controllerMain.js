const controllerMain = function (model, view) {
    const _view = view;
    const _model = model;

    _view.users.addEventListener('click', event => {
        const users = _model.getUsers();
        _view.drawInitUsers(users);
    });

    _view.chat.addEventListener('click', event => {
        _model.getMessages(data => {
            const messages = JSON.parse(data);
            _view.drawInitMassage(messages);
        });
    });

    _view.sendMessage.addEventListener('click', event => {
        const message = new Messages(_view.name, view.email, view.message, new Date());
        _model.addMessages(message);
    });
};