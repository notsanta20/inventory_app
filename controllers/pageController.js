const db = require(`../db/queries`);

async function index(req, res) {
  const count = await db.getCount();
  res.render(`index`, { count: count });
}

async function allGames(req, res) {
  const data = await db.getAllGames();
  res.render(`games`, { games: data, deleteGame: deleteGame });
}

async function editGameForm(req, res) {
  const data = req.params;
  const formData = await db.getSingleGame(data.gameTitle);
  res.render(`editGame`, { data: formData[0] });
}

async function editGame(req, res) {
  const { title, studio, category } = req.body;
  const org = req.params.gameTitle;
  await db.editGame(title, studio, category, org);
  res.redirect(`/games`);
}

async function deleteGame(req, res) {
  const title = req.params.gameTitle;
  await db.deleteGame(title);
  res.redirect(`/games`);
}

async function allStudios(req, res) {
  const data = await db.getAllStudios();
  res.render(`studios`, { studios: data });
}

async function allCategories(req, res) {
  const data = await db.getAllCategories();
  res.render(`categories`, { categories: data });
}

async function subStudio(req, res) {
  const query = req.params;
  const data = await db.getSubStudio(query.subStudio);
  res.render(`subStudio`, { title: query.subStudio, sub: data });
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

function error(req, res) {
  res.render(`error`);
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
  deleteGame,
  subStudio,
  error,
};
