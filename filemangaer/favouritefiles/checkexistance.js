const fs = require("fs");
const favModule = require("./favouriteModule.js");

const favFilePath ="appstore/favs.txt";


module.exports.checkFavExistance = async (data)=>{
    // console.log("received existance",data)
    await fs.readFile(favFilePath, 'utf8', (err, fileData) => {
        if (err) throw err;
        // console.log("filedata is",fileData)
    
        // Check if the data already exists in the file
        if (fileData.includes(JSON.stringify(data))) {
            console.log("was found")
          return true
        } else {
         return false
        }
      });
}