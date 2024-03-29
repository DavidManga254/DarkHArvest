//module to add favourite games to text
const path = require("path");
const fs = require("fs");
const favmodule = require("./favouriteModule");

const favFilePath = "appstore/favs.txt";


// Function to write data to a file
function writeToFile(data) {
  fs.writeFile(favFilePath, data + 'nextFavouriteAnime', (err) => {
    if (err) throw err;
    // console.log('Data written to file.');
  });
}

// Function to append data to a file
function appendToFile(data) {
    // Read the file contents
    fs.readFile(favFilePath, 'utf8', (err, fileData) => {
      if (err) throw err;
  
      // Check if the data already exists in the file
      if (fileData.includes(data)) {
        // console.log('Data already exists in the file.');
        return;
      } else {
        
        // Append the data to the file
        fs.appendFile(favFilePath, data + 'nextFavouriteAnime' , (err) => {
          if (err) throw err;
          // console.log('Data appended to file.');
        });
      }
    });
  }
  


module.exports.addFavourite = (data) =>{
    try{
        // console.log("called");
        //check if file exists first
        if(fs.existsSync(favFilePath)){
            // console.log("already exists",data)
            //append the new fav to file
            appendToFile(data);

        }else{
            // console.log("not exist",data)
            //create file if it does not exist
            writeToFile(data);
        }

    }catch(err){
        console.log(err);
        // if (err){
        //     console.log(err);
        //     return err;
        // }
    }
    
}