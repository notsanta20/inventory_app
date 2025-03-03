const { Pool } = require(`pg`);
require(`dotenv`).config();

module.exports = new Pool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.NAME,
  password: process.env.PASSWORD,
  port: process.env.DATABASE_PORT,
  // ssl: true,
});
