const path = require("path");
const fs = require("fs");

const favFilePath = "appstore/favs.txt";

// Function to read data from a file
function readFromFile() {
    try {
        const data = fs.readFileSync(favFilePath, 'utf8');
        const dataArray = data.split('NextFavouriteAnime'); // Split the string into an array using newline as the delimiter
        return dataArray;
    } catch (err) {
        throw err;
    }
}

// Module function to read favorites
module.exports.readfavourites = () => {
    try {
        const data = readFromFile();
        return data;
    } catch (err) {
        return false;
    }
};
