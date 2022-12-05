// const knex = require("knex")({
//   client: "pg",
//   connection: {
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB,
//   },
// });
const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    password: "descandon88",
    database: "inmobiliariaRossi_DB",
  },
});


module.exports = knex;