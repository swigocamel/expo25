const { DataSource } = require("typeorm");
const { Pavilion } = require("./entities/Pavilion");
require("dotenv").config();

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  entities: [Pavilion],
});

module.exports = { AppDataSource };
