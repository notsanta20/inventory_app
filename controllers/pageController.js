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
  const data = await db.getSubCategory(query.subCat);
  res.render(`subCategory`, { title: query.subCat, sub: data });
}

function addGamesForm(req, res) {
  res.render(`addGames`);
}

async function addGames(req, res) {
  const { title, category } = req.body;
  await db.addGame({ title, category });
  res.redirect(`/games`);
}

function editGameForm(req, res) {
  const data = req.params;
  res.render(`editGame`, { title: data.gameTitle });
}

async function editGame(req, res) {
  const { title } = req.body;
  const org = req.params.gameTitle;
  console.log(org);
  await db.editGame(title, org);
  res.redirect(`/games`);
}

module.exports = {
  index,
  allGames,
  allCategories,
  subCategory,
  addGamesForm,
  addGames,
  editGameForm,
  editGame,
};
