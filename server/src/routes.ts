import express from "express";
import ClassesController from "./controllers/ClassesController";

const routes = express.Router();
const classesControllers = new ClassesController();

//Quando o usuario acessar a rota /users ele vai executar alguma funcao especifica que iremos definir

routes.get("/classes", classesControllers.index);
routes.post("/classes", classesControllers.create);

export default routes;
