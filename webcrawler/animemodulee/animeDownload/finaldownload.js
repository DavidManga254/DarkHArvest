const fs = require('fs');
const path = require('path');
const createDir = require('../../../functions/createdir.js');


module.exports.downloadManager= async function(firstLink,start,end,name,browser,page,quality,language){
    
  let downloadLink;
  let chosenLink;

  let ender = end;
    console.log(firstLink)
    if(end === undefined || end == null){
      ender = firstLink.length-1
    }
    console.log('end is',ender)
    console.log('start is',start)
    if(start>ender){
      console.log('close')
      await page.close()
      return;
    }else{

      console.log(`fucking start is ${start} and end is ${end}`)
      try{
        
        console.log('ndo kuingia',firstLink)
        await page.goto(firstLink[start-1],{waitUntil:'domcontentloaded'});
        console.log('navigated to',firstLink[start-1])  
        
    }catch(err){
        console.log('Error navigating to stream page',err)
    }

    let title = await page.$eval('title',element=>{
        return element.textContent;
    })
    //get download link
    try{

        downloadLink = await page.$$eval('#pickDownload a',elements=>elements.map((element)=>{
            let link = element.getAttribute('href');
            let quality = element.textContent

            return{
                quality:quality,
                link:link
            }
        }));
        console.log('here are the link',downloadLink)
        for(let i =0;i<downloadLink.length;i++){
          console.log('........................................................................................................................')
          console.log(downloadLink[i].quality.toLowerCase())
          console.log(quality.toLowerCase())
          console.log(language.toLowerCase())
          console.log('.......................................................................................................................')
          if(downloadLink[i].quality.toLowerCase().includes(quality.toLowerCase()) && downloadLink[i].quality.toLowerCase().includes(language.toLowerCase()) ){
            chosenLink = downloadLink[i];
            break;
          }
          else{
            const filteredLinks = downloadLink.filter(linkObj =>
              linkObj.quality.toLowerCase().includes(language.toLowerCase())
            );
            chosenLink = filteredLinks.pop();
          }
        }


        console.log('chosen download link is ',chosenLink);    
    }catch(err){
        console.log('error getting download link',err);
    }
    

    //download manager
    try {
        downloader = page;
        console.log('going to ',chosenLink.link)
        
        await downloader.goto(chosenLink.link,{timeout:0});
      
        function delay(ms) {
          return new Promise(resolve => {
            setTimeout(resolve, ms);
          });
        }
      
        await delay(6000)
      
        let finaledownloadLink = await downloader.$eval('.row a[rel="nofollow"]', (element) => {
          let link = element.getAttribute('href');
      
          return link;
        })
      
        console.log('link is', finaledownloadLink)
        await downloader.goto(finaledownloadLink,{timeout:0})

        await delay(3000)
        // Manually fetch the download link
        await downloader.evaluate(async() => {
            let form = document.querySelector('form');
            if (form === null){
              this.downloadManager(firstLink,start,ender,name,browser,page,quality)
            }else{
              await form.submit();
            }
          });
        // Wait for the download to complete
        let fileContent;

        try {
          // Read the file synchronously
          console.log('about to rread now')
          fileContent = fs.readFileSync('./path.txt', 'utf8');
          console.log('File contenter:', fileContent);
          fileContent =fileContent;
          
        } catch (error) {
          console.error('Error reading file:', error);
        }
        let counter=0
        let downloadPath = path.join(fileContent,name);
        console.log('FUCKING DOWNLOAD PATH IS',downloadPath)
        createDir.ensureDirectoryExists(downloadPath);



        fs.watch(downloadPath, async (eventType, filename) => {
          // Check if the file is a .crdownload file
          
            // Check if the file was created
            if (eventType === 'rename') {
              counter++;
              if (counter === 1){
                console.log(`Download started: ${filename}`);
              }else if(counter === 2){
                console.log(`${filename} renamed nad counter is ${counter}`)
                fs.rename(`${downloadPath}/${'x.mp4'}`, `${downloadPath}/${name} ${start}.mp4`, (err) => {
                  if (err) {
                    console.log(err)
                  }
                });
                
                console.log(`Download conpmleteder: ${filename}`);
                await this.downloadManager(firstLink,start+1,ender,name,browser,page,quality,language);
              }

            }
          
        });
      } catch (err) {
        console.log('error creating download page', err)
      }

    }
}
