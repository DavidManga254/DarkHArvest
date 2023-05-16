const https = require('https')
module.exports.downloadMovie = async function(downloadlink,page,browser){
    try{

    }catch(err){
        console.log('',err)
    }
    //navigate to download page
    try{
        await page.goto(downloadlink);
    }catch(err){
        console.log('erorr going to movie page',err);
    }
    //press play button
    try{
        await page.waitForSelector('#horfa iframe');

       const iframeLink = await page.$eval('#horfa iframe',element=>{
        let link = element.getAttribute('src');
        return link
       }) 
       console.log('ndo hii',iframeLink)
       await page.goto(iframeLink);
       
    }catch(err){
        console.log('',err)
    }

    //get play
    try{
        let playButton = await page.$eval('#video-container .play-button',async element=>{
            await element.click();
        })
    }catch(err){
        console.log('error getting play button',err)
    }

    //get download link
    try{
        await page.waitForSelector('#video-container #dld a')
        let downloadLink = await page.$eval('#video-container #dld a',element=>{
            let downloadLink = element.getAttribute('href');

            return downloadLink;
        })

        /*https.get(downloadLink, (response) => {
            const file = fs.createWriteStream('video.mp4');
            console.log('downloading');
            response.pipe(file);
          });*/

        console.log('alaa',downloadLink)
    }catch(err){
        console.log('mothafucker',err)
    }
}   