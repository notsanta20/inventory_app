const express = require(`express`);
const route = express();
const controller = require(`../controllers/pageController`);

route.get(`/`, controller.index);
route.get(`/games`, controller.allGames);
route.get(`/categories`, controller.allCategories);
route.get(`/categories/:sub_cat`, controller.subCategory);

module.exports = route;
