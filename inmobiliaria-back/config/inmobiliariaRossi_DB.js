const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    port: 4000,
    user: "postgres",
    password:"franco.rossi3" ,
    database:"inmobiliariaRossi_DB",
  },
});

module.exports = knex;
