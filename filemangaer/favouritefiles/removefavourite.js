// Function to remove specific data from a file
const fs = require("fs");
const favFilePath = "appstore/favs.txt";

module.exports.removeFromFile = (data) => {
  fs.readFile(favFilePath, 'utf8', (err, fileData) => {
    if (err) throw err;

    const lines = fileData.split('NextFavouriteAnime');
    const updatedData = lines.filter((line) => line !== data).join('NextFavouriteAnime');

    fs.writeFile(favFilePath, updatedData, (err) => {
      if (err) throw err;
      console.log('Data removed from file.');
    });
  });
}
