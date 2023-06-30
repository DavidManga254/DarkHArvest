const addfav = require("./addFavourite");
const checkExist = require("./checkexistance");
const removeFav = require('./removefavourite')
const readFav = require("./readfavorite");

module.exports.FavouriteModule ={
    favFilePath :  "appstore/favs.txt",
    addFavourite : addfav.addFavourite,
    checkExistence : checkExist.checkFavExistance,
    removeFavourite : removeFav.removeFromFile,
    readFavourite : readFav.readfavourites
}
