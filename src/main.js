const { app, BrowserWindow ,session, webContents ,dialog,ipcMain} = require('electron');
const path = require('path');
const pie = require('puppeteer-in-electron');
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const searchModule = require('../webcrawler/animemodulee/searchanime/searchanime.js');
const detailsModule = require('../webcrawler/animemodulee/animeDownload/details.js');
const downloadModule = require('../webcrawler/animemodulee/animeDownload/downloadepisode.js')


const  mainFavModule = require("./mainprocess/filemanagers/favouritesManager/favmanager.js");

function doubleBackslashes(string) {
  let newString = string.replace(/\\/g, '\\\\'); // use regular expression to replace all occurrences
  newString += '\\\\'; // add two backslashes to the end
  return newString;
}


let browser;
let mainWindow;

(async()=>{
  await pie.initialize(app);
  browser = await pie.connect(app, puppeteer);

})();
// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = async () => {

  // Create the browser window.
  mainWindow = new BrowserWindow({
    width:800,
    height: 600,
    args: [
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu-sandbox',
      '--no-sandbox',
      '--no-first-run',
      '--no-zygote',
      "--disable-notifications",
      '--single-process',
      '--disable-web-security',
      '--disable-features=IsolateOrigins,site-per-process',
    ],
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      webSecurity:false
    },
  
  });

  // and load the index.html of the app.
  try{
    mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
    mainWindow.setMinimumSize(770,700)
  }catch(err){
    console.log('error loading app',err)
  }
  
  //
  console.log('loaded',MAIN_WINDOW_WEBPACK_ENTRY)
  while (!browser) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
console.log("b setup")
  
  try {
    // Try to read the file
    const data = fs.readFileSync('./path.txt', 'utf8');
    console.log('File content:', data);
  } catch (error) {
    // File does not exist, create it
    if (error.code === 'ENOENT') {
      try {
        console.log("got error")
        const result = await dialog.showOpenDialog({ properties: ['openDirectory'] });
        if (!result.canceled) {
          let selectedPath = result.filePaths[0];

          selectedPath=doubleBackslashes(selectedPath);

          fs.writeFileSync('./path.txt', selectedPath, 'utf8');
        
        }
      } catch (error) {
        console.error('Error creating file:', error);
      }
    } else {
      console.error('Error reading file:', error);
    }
  }
console.log('done')
  
};
// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.



app.on('ready',async ()=>{
  createWindow();
});



// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
let searchBrowser;
let searchPage;
app.on('window-all-closed', async() => {
  if (process.platform !== 'darwin') {
    app.quit();
    await searchBrowser.close();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});



async function createDownloaderWindow(){

  let crawlerWindow = new BrowserWindow({
    width:800,
    show:false,
    height: 600,
    args: [
      '--disable-gpu',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu-sandbox',
      '--no-sandbox',
      '--no-first-run',
      '--no-zygote',
      "--disable-notifications",
      '--single-process',
      '--disable-web-security',
      '--disable-features=IsolateOrigins,site-per-process',
    ],
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  
  });
  crawlerWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  const crawlerPage = await pie.getPage(browser,crawlerWindow);

  const session = crawlerWindow.webContents.session;
  session.webRequest.onBeforeRequest({ urls: ['http://*/*', 'https://*/*'] }, (details, callback) => {
    if (['', 'stylesheet', 'font',].indexOf(details.resourceType) !== -1) {
       //Abort requests for images, stylesheets, and fonts
      callback({ cancel: true });
    } else {
      // Allow all other requests
      callback({});
    }
  });  

  crawlerWindow.webContents.session.on('will-download',async (event,downloadItem,webContents)=>{
    let downloadPath;

    try {
      // Read the file synchronously
      const fileContent = fs.readFileSync('./downloadpath.txt', 'utf8');
      console.log('File content2:', fileContent);
      downloadPath =fileContent;
      
    } catch (error) {
      console.error('Error reading file:', error);
    }

    let downloadpath2 = path.join(downloadPath,'x.mp4')
    downloadPath = path.join(downloadPath, downloadItem.getFilename());
    
    downloadItem.setSavePath(downloadPath);

    downloadItem.on('updated', (event, state) => {
      if (state === 'interrupted') {
        console.log('Download is interrupted but can be resumed')
       
      } else if (state === 'progressing') {
        if (downloadItem.isPaused()) {
          console.log('Download is paused')
        } else {
          console.log(`Received bytes: ${downloadItem.getReceivedBytes()/1000000}MB`)
        }
      }
    })
    downloadItem.once('done', (event, state) => {
      if (state === 'completed') {
        fs.rename(`${downloadPath}`, `${downloadpath2}`, (err) => {
          if (err) {
            console.log(err)
          }
        });
        console.log('Download successfully')
      } else {
        console.log(`Download failed: ${state}`)
      }
    })
  });
  searchBrowser = crawlerWindow;
  searchPage = crawlerPage
};

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

ipcMain.handle('search',async (event, arg) => {
  //create browser and window
  await createDownloaderWindow();
  console.log('created');

  let searchResults = await searchModule.SearchAnime(arg,searchBrowser,searchPage);
  
  return searchResults;

});

ipcMain.handle('get/details',async (event,args)=>{
  //get anime details
  let details = await detailsModule.animeDetails(args,searchPage)

  return details;
});

ipcMain.handle('download/anime',async (event,args)=>{
  await downloadModule.downloadAnime(args.start,args.stop,args.first,args.name,searchBrowser,searchPage)
})

ipcMain.handle("manageFavourite",async(event,args)=>{
    console.log("section 1 called")
    //favourties module file manager
    const response = await mainFavModule.mainFavManager(args);

    return response;
})