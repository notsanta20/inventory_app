const pool = require(`./pool`);

async function getAllGames() {
  const { rows } = await pool.query(`SELECT title FROM games`);
  return rows;
}

async function getAllCategories() {
  const { rows } = await pool.query(`SELECT DISTINCT category FROM games`);
  return rows;
}

module.exports = { getAllGames, getAllCategories };
