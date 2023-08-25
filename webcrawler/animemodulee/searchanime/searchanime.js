const details = require('../animeDownload/details.js')
const pager = require('../../browserinstance/browser.js');

module.exports.SearchAnime = async function(animeName,browser,page){

    await page.goto('https://animepahe.ru/',{timeout:0});

    let input;
    let searchButton;
    let results;
    

    console.log(`current url is ${await page.url()}`);

    // get input and button
    try{
        input = await page.waitForSelector('.input-search');

        console.log(`button found ${input},${searchButton}`)

    }catch(error){
        console.log(`buttons not found`)
    }

    //input and click search and extract
    try{

        await input.type(animeName);

        
            
            try{
                    results = await page.waitForSelector('.search-results li',{waitUntil:'networkidle0'}) 
                    function delay(ms) {
                        return new Promise(resolve => {
                          setTimeout(resolve, ms);
                        });
                      }
                    
                      await delay(3000)
                    results = await page.$$eval('.search-results li', (elements) => elements.map((element)=>{
                        
                        let aTag = element.querySelector('a');
                        let link = aTag.getAttribute('href');
                        let name = aTag.getAttribute('title')

                        let imgTag = element.querySelector('img')
                        
                        let coverLink = imgTag.getAttribute('src');
                        return{
                            name:name,
                            link:`https://animepahe.ru${link}`,
                            cover:coverLink
                        }

                    }));
                         
                                

                                
            }catch(err){
                console.log(`error findinfg search results`,err);
            }

       
       //await details.animeDetails(results[0],500,502,animeName,page,browser);

        
    }catch(err){
        console.log(`error inputing and searching`,err);
    }
    console.log('here is the results',results);
    await browser.close();
    return results;
}