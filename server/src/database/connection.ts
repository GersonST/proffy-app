import knex from "knex";

// o path melhora para trabalhar com caminhos dentro de aplicacoes pois padroniza os mesmos independente de qual for o sistema operacional do usuario
import path from "path";

//migrations controlam a versao do banco de dados

const db = knex({
  client: "sqlite3",
  connection: {
    filename: path.resolve(__dirname, "database.sqlite"),
  },
  useNullAsDefault: true,
});

export default db;
