const db = require(`../db/queries`);

index = (req, res) => {
  res.render(`index`);
};

async function allGames(req, res) {
  const data = await db.getAllGames();
  res.render(`games`, { games: data });
}

async function allCategories(req, res) {
  const data = await db.getAllCategories();
  res.render(`categories`, { categories: data });
}

module.exports = { index, allGames, allCategories };
