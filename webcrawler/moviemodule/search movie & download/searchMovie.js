const download = require('./downloadmovie.js')
module.exports.searchMovie = async function(page,browser,movieName){
    let searchBar;
    let results;

    //goto page
    try{
        await page.goto('https://www.goojara.to/');

    }catch(err){
        console.log('error going to goojara',err);
    }


    //get serch bar 
    try{
        searchBar = await page.waitForSelector('.seard input',element=>{
            return element;
        });

        console.log('found searchbar',searchBar);
    }catch(err){
        console.log('error finding searchbar',err);
    }

    //type into search bar and extract results;
    try{
        
        await searchBar.type(movieName);
        console.log('typed')
        await page.waitForSelector('#result .mfeed li')
        results = await page.$$eval('#result .mfeed li',elements=>elements.map((element)=>{
            let aTag = element.querySelector('a');
            let link = aTag.getAttribute('href');

            let nameTag = element.querySelector('div');
            let strong = nameTag.querySelector('strong');
            let movieName = strong.textContent;

            strong.remove();

            let year = nameTag.textContent;

            return{
                name:`${movieName} ${year}`,
                link:link
            }
        }))

        console.log('here are the results',results)

        await download.downloadMovie(results[0].link,page,browser);
    }catch(err){
        console.log('error extracting results',err);
    }
}