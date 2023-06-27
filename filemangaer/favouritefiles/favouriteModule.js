const addfav = require("./addFavourite");
const checkExist = require("./checkexistance");

module.exports.favFilePath = "appstore/favs.txt";

module.exports.FavouriteModule ={
    addFavourite : addfav.addFavourite,
    checkExistence : checkExist.checkFavExistance
}
