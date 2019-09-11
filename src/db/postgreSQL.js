const {Pool, Client} = required('pg');
const connection = 'posrgressql://postgres:test123@localhost:5432/testbb';

const client = new Client({
    connection : connection
});


function PostgresMessagesDAO() {
}
PostgresMessagesDAO.prototype = Object.create(DAO.prototype);
PostgresMessagesDAO.prototype.constructor = PostgresMessagesDAO;


function PostgresUsersDAO() {
}
PostgresUsersDAO.prototype = Object.create(DAO.prototype);
PostgresUsersDAO.prototype.constructor = PostgresUsersDAO;