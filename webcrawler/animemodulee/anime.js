const search = require('./searchanime/searchanime.js')


//entry point of anime module
module.exports.loadAnime = async function(page,browser){
    //go to gogoanime;
    let pageCopy = page
    try{
        /*let status = await pageCopy.goto('https://gogoanime.cl',{timeout:60000});

        status = status.status();
        console.log(status)
        console.log('gone');*/
    }catch(err){
        console.log(`error going to webpage`,err);
    }

    
   search.SearchAnime('jujutsu kaisen',browser,page);
}