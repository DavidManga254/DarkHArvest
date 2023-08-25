const fs = require("fs");
const favModule = require("./favouriteModule.js");

const favFilePath ="appstore/favs.txt";


module.exports.checkFavExistance = async (data)=>{
    // read file list and check existance of data

    try {
      const fileData = await fs.promises.readFile(favFilePath, "utf8");
      // console.log(fileData);
      // console.log("here is data",data)
      if (fileData.includes(data)) {
        console.log("Data was found");
        return true;
      } else {
        return false;
      }
    } catch (err) {
      return false;
    }
}