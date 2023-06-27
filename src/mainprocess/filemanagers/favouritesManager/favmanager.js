const  favModule = require("../../../../filemangaer/favouritefiles/favouriteModule");



module.exports.mainFavManager = async(args)=>{
   
    switch(args.type){
        //add favourites
        case "addFavourite":
          try{
            // console.log("payload is",args.payload)
            favModule.FavouriteModule.addFavourite(args.payload)
  
            return true;
  
          }catch(err){
  
           if(err){
              return false;
           }
  
          }
        
          //check if anime exists
          case "checkExistence":
            try{
              console.log("section 2 called")
              //check existance of anime on saved list
              const existanceBool = await favModule.FavouriteModule.checkExistence(args.payload);
              console.log("existence bool is",existanceBool);
              return existanceBool;
            }catch(err){
                console.log(err);
            }
      }
}