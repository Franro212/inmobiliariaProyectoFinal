
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 4000,
    user: "postgres",
    password: "franco.rossi3",
    database: "InmobiliariaRossi",
  },
});



module.exports = knex;