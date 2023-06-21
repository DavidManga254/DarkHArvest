const path = require("path");
const fs = require("fs");

const favFilePath = "../../appstore/favs.txt";


// Function to read data from a file
function readFromFile(callback) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
      
        const dataArray = data.split('\n'); // Split the string into an array using newline as the delimiter
      
        callback(dataArray);
    });
}

readFromFile((data)={

})

//module to read favorites
module.exports.readfavourites = async()=>{
    try{
        let data;
        readFromFile((returnedData)=> data = returnedData)
        return data;

    }catch(err){
        if(err){
            return false;
        }
    }
}