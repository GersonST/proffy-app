import express from "express";
import routes from "./routes";

const app = express();

//Para fazer com que o express entenda e leia json
app.use(express.json());
app.use(routes);
//Faz o app ouvir uma requisição http através de uma porta no caso Localhost 3333

app.listen(3333);

//O Knex serve para modificar a forma de escrita na relacao com o banco de dados sqlite3

//SELECT = FROM users  - antes
// knex('users').select('*')  - depois
