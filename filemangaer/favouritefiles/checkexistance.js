const fs = require("fs");
const favModule = require("./favouriteModule.js");

const favFilePath ="appstore/favs.txt";


module.exports.checkFavExistance = async (data)=>{
    // read file list and check existance of data

    try {
      const fileData = await fs.promises.readFile(favFilePath, "utf8");
      if (fileData.includes(JSON.stringify(data))) {
        console.log("Data was found");
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.error(err);
      throw err;
    }
}