const db = require(`../db/queries`);

async function index(req, res) {
  const count = await db.getCount();
  res.render(`index`, { count: count });
}
async function deleteGame(title) {
  console.log(title);
}

async function allGames(req, res) {
  const data = await db.getAllGames();
  res.render(`games`, { games: data, deleteGame: deleteGame });
}

async function allStudios(req, res) {
  const data = await db.getAllCategories();
  res.render(`studios`, { categories: data });
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
  const { title, studio, category } = req.body;
  await db.addGame({ title, studio, category });
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
  allStudios,
  allCategories,
  subCategory,
  addGamesForm,
  addGames,
  editGameForm,
  editGame,
};
