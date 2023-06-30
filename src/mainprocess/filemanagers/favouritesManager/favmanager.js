const  favModule = require("../../../../filemangaer/favouritefiles/favouriteModule");



module.exports.mainFavManager = async(args)=>{
   let payload = JSON.stringify(args.payload);
    switch(args.type){
        //add favourites
        case "addFavourite":
          try{
            // console.log("payload is",args.payload)
            favModule.FavouriteModule.addFavourite(payload)
  
            return true;
  
          }catch(err){
  
           if(err){
              return false;
           }
  
          }
        
          //check if anime exists
        case "checkExistence":
            try{
              // console.log(args.type)
              // console.log("section 2 called and payload is",args.payload);
              //check existance of anime on saved list
              const existanceBool = await favModule.FavouriteModule.checkExistence(payload);
              // console.log("existence bool is",existanceBool);
              return existanceBool;
            }catch(err){
                console.log(err);
            }

        case "removeFavourite":
          try{
              //remove favorite anime
              favModule.FavouriteModule.removeFavourite(payload);
            
          }catch(err){
            throw err;
          }
        
        case "retriveFavourite":
          try{
            const favList = await favModule.FavouriteModule.readFavourite();

            return favList;
          }catch(err){
            throw(err);
          }
      }
}