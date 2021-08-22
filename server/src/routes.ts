import express from "express";

const routes = express.Router();

//Quando o usuario acessar a rota /users ele vai executar alguma funcao especifica que iremos definir

routes.post("/classes", (request, response) => {
  const data = request.body;

  console.log(data);

  return response.send();
});

export default routes;
