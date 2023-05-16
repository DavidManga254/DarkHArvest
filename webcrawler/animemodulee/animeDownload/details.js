const downloader = require('./downloadepisode.js')

module.exports.animeDetails = async function(animeDetails,page){
   
    console.log(`received`, animeDetails.link)

    let storyline;
    let genre;
    let release;
    let episodes;
    let related

    await page.goto(animeDetails.link)

    // get Details about the anime
    try{
        storyline = await page.$eval('.anime-synopsis',element=>{
            return element.textContent
        })

        await page.$eval('.col a[data-tab="anime-recommendation"]',async element => await element.click())
        console.log('story got')
        await page.waitForSelector('.col-12');
        related = await page.$$eval('.anime-recommendation .col-2 a',elements=>elements.map((element)=>{
            let link = element.getAttribute('href');
            let name = element.getAttribute('title')

            let image = element.querySelector('img');
            
            let cover = image.getAttribute('data-src');

            return{
                name:name,
                cover:cover,
                link:`https://animepahe.ru${link}`
            }
        }))
        console.log('extracted got')
        let extractedInfo = await page.$$eval('.anime-info p',elements=>elements.map((element)=>{
            let strong = element.querySelector('strong');
            strong.remove();
            return element.textContent;
        }))

        function delay(ms) {
            return new Promise(resolve => {
              setTimeout(resolve, ms);
            });
          }

        await delay(3000)

        let firstEpisodeLink = await page.$eval('.episode-wrap a',element=>{
            let link = element.getAttribute('href');

            return `https://animepahe.ru${link}`;
        })

        console.log(firstEpisodeLink);
        //await downloader.downloadAnime(start,stop,firstEpisodeLink,animename,browser,page)
        
        return{
            name:animeDetails.name,
            cover:animeDetails.cover,
            episode:firstEpisodeLink,
            story:storyline,
            related:related
        }

        

        

    }
    catch(error){
        console.log('error getting anime details',error)
    }
}