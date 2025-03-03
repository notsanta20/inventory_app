const express = require(`express`);
const route = express();
const controller = require(`../controllers/pageController`);

route.get(`/`, controller.index);
route.get(`/games`, controller.allGames);
route.get(`/categories`, controller.allCategories);
route.get(`/categories/:sub_cat`, controller.subCategory);
route.get(`/add-games`, controller.addGamesForm);
route.post(`/add-games`, controller.addGames);

module.exports = route;
