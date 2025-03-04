const pool = require(`./pool`);

async function getCount() {
  const dataT = await pool.query(`SELECT COUNT(title) FROM games`);
  const dataC = await pool.query(`SELECT COUNT(DISTINCT category) FROM games`);
  const title = dataT.rows[0].count;
  const category = dataC.rows[0].count;
  return { title, category };
}

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

async function editGame(title, org) {
  await pool.query(
    `UPDATE games SET title = '${title}' WHERE title = '${org}';`
  );
}

module.exports = {
  getCount,
  getAllGames,
  getAllCategories,
  getSubCategory,
  addGame,
  editGame,
};
