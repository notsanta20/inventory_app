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

async function subCategory(req, res) {
  const query = req.params;
  const data = await db.getSubCategory(query.sub_cat);
  res.render(`subCategory`, { title: query.sub_cat, sub: data });
}

module.exports = { index, allGames, allCategories, subCategory };
