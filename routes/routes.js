const express = require(`express`);
const route = express();
const controller = require(`../controllers/pageController`);

route.get(`/`, controller.index);
route.get(`/games`, controller.allGames);
route.get(`/studios`, controller.allStudios);
route.get(`/studios/:subStudio`, controller.subStudio);
route.get(`/categories`, controller.allCategories);
route.get(`/categories/:subCat`, controller.subCategory);
route.get(`/add-games`, controller.addGamesForm);
route.post(`/add-games`, controller.addGames);
route.get(`/edit-game/:gameTitle`, controller.editGameForm);
route.post(`/edit-game/:gameTitle`, controller.editGame);
route.get(`/delete-game/:gameTitle`, controller.deleteGame);
route.get(`*`, controller.error);

module.exports = route;
