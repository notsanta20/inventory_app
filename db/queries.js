const pool = require(`./pool`);

async function getAllGames() {
  const { rows } = await pool.query(`SELECT title FROM games`);
  return rows;
}

async function getAllCategories() {
  const { rows } = await pool.query(`SELECT DISTINCT category FROM games`);
  return rows;
}

async function getSubCategory(query) {
  console.log(query);
  const { rows } = await pool.query(
    `SELECT title FROM games WHERE category = '${query}'`
  );
  console.log(rows);
  return rows;
}

module.exports = { getAllGames, getAllCategories, getSubCategory };
