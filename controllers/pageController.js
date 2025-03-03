const db = require(`../db/queries`);

async function index(req, res) {
  const count = await db.getCount();
  res.render(`index`, { count: count });
}

async function allGames(req, res) {
  const data = await db.getAllGames();
  res.render(`games`, { games: data });
}

async function allCategories(req, res) {
  const data = await db.getAllCategories();
  res.render(`categories`, { categories: data });
}

async function subCategory(req, res) {
  const query = req.params;
  const data = await db.getSubCategory(query.sub_cat);
  res.render(`subCategory`, { title: query.sub_cat, sub: data });
}

function addGamesForm(req, res) {
  res.render(`addGames`);
}

async function addGames(req, res) {
  const { title, category } = req.body;
  console.log(title, category);
  await db.addGame({ title, category });
  res.redirect(`/games`);
}

module.exports = {
  index,
  allGames,
  allCategories,
  subCategory,
  addGamesForm,
  addGames,
};
