import express from "express";

const app = express();

//Quando o usuario acessar a rota /users ele vai executar alguma funcao especifica que iremos definir

app.get("/users", (request, response) => {
  //como iremos trabalhar com protocolos de comunicacao entre backend e frontend logo utilizamos como resposta dados em JSON.
  const users = [
    { name: "Gerson", age: 30 },
    { name: "Gefferson", age: 30 },
  ];
  return response.json(users);
});

//Faz o app ouvir uma requisição http através de uma porta no caso Localhost 3333

app.listen(3333);
