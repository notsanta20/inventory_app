const pool = require(`./pool`);

async function getAllGames() {
  const { rows } = await pool.query(`SELECT title FROM games ORDER BY title`);
  return rows;
}

async function getAllCategories() {
  const { rows } = await pool.query(
    `SELECT DISTINCT category FROM games ORDER BY category`
  );
  return rows;
}

async function getSubCategory(query) {
  const { rows } = await pool.query(
    `SELECT title FROM games WHERE category = '${query}' ORDER BY title`
  );
  return rows;
}

async function addGame(data) {
  await pool.query(
    `INSERT INTO games (title, category) VALUES ('${data.title}', '${data.category}')`
  );
}

module.exports = { getAllGames, getAllCategories, getSubCategory, addGame };
