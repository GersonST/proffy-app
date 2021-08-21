import express from "express";

const app = express();

//Para fazer com que o express entenda e leia json
app.use(express.json());

//Quando o usuario acessar a rota /users ele vai executar alguma funcao especifica que iremos definir

app.get("/", (request, response) => {
  return response.json({ message: "Hello World" });
});

//Faz o app ouvir uma requisição http através de uma porta no caso Localhost 3333

app.listen(3333);

//O Knex serve para modificar a forma de escrita na relacao com o banco de dados sqlite3

//SELECT = FROM users  - antes
// knex('users').select('*')  - depois
