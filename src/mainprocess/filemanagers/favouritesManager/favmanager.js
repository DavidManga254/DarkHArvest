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
            console.log("checking existence of ",args);
            try{
            //   let  s = await favModule.FavouriteModule.checkExistence(args.payload);
            //     console.log("existance  mggfgdgdgdg?????", s)

               
                return await favModule.FavouriteModule.checkExistence(args.payload);
            }catch(err){
                console.log(err);
            }
      }
}