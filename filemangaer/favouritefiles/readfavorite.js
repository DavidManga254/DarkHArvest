const path = require("path");
const fs = require("fs");

const favFilePath = "appstore/favs.txt";

// Function to read data from a file
function readFromFile() {
    try {
        const data = fs.readFileSync(favFilePath, 'utf8');
        const dataArray = data.split('nextFavouriteAnime');
        return dataArray;
    } catch (err) {
        if(err.code === 'ENOENT'){
            return;
        }
    }
}

// Module function to read favorites
module.exports.readfavourites = () => {
    try {
        let data = readFromFile();
        if(Array.isArray(data)){
            let parsedData = [];
            data = data.forEach(jsonString => {
                jsonString = jsonString.trim();
                // Parse each JSON string
                try {
                    const parsedJson = JSON.parse(jsonString);
                    parsedData.push(parsedJson);
                } catch (err) {
                    console.log(jsonString)
                    console.log("Error parsing JSON:", err);
                }
            });

            return parsedData;
        }else{
            return;
        }
        
    } catch (err) {
        
        return false;
    }
};
