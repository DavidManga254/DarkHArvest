//page initializer
const pager = require('../../browserinstance/browser.js');
const downloadManager = require('./finaldownload.js');

// module to begin downloads;
module.exports.downloadAnime = async function(start,stop,animelink,name,browser,page,quality,lan){

    if(start > stop && stop !== null){
        await browser.close()
        return
    }else{
     
    

    //navigate to link
    try{
        
        await page.goto(animelink);
        
        console.log(`gone to animelink ${await page.url()}`)
    }catch(error){
        console.log('Error navigating to the download page',error);
    }

    //go to episode
    try{
        
        
        

        let epLink = await page.$$eval('#scrollArea .dropdown-item',elements=>elements.map((element)=>{
            let link = element.getAttribute('href')
            return `https://animepahe.ru${link}`;
        }))

        let title = await page.title();
        console.log('here is title',title);
        console.log('here is list',epLink)

        await downloadManager.downloadManager(epLink,start,stop,name,browser,page,quality,lan);

        


        
        

        //await epButton.click();
    }catch(err){
        console.log('error finding episode ',err)
    }
    }
    
}