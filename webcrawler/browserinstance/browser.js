const puppeteer = require('puppeteer-extra') 

const userAgent = require('user-agents')
module.exports.createPageWithViewport= async function (choice,animename) {

  
  if(animename){
    const fs = require('fs');

const downloadPath = `${process.env.USERPROFILE}\\Downloads\\${animename}`;

// Create the download directory if it doesn't exist
if (!fs.existsSync(downloadPath)) {
  fs.mkdirSync(downloadPath, { recursive: true });
}
  const downloadImageDirectoryPath = downloadPath;

  puppeteer.use(require('puppeteer-extra-plugin-user-preferences')
  (
  {userPrefs: {
  download: {
  prompt_for_download: false,
  default_directory:downloadImageDirectoryPath,
  },
  plugins: {
  always_open_pdf_externally: true
  },
  }}));
  }
  
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {
      width: 800,
      height: 1500,
      deviceScaleFactor: 1,
      hasTouch: false,
      isLandscape: false,
      isMobile: false,
    },
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
  });
  const page = await browser.newPage();

  await page.setViewport({
    width: 800,
    height: 1200,
  });
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3');
  
  if(choice==='yes'){
     
      page.setRequestInterception(true);
      page.on('request', (request) => {
        if (['image', 'stylesheet', 'font',].indexOf(request.resourceType()) !== -1) {
            request.abort();
        } else {
            request.continue();
        }
    });

    return {page:page,browser:browser};
  }else{
    return {page:page,browser:browser};
  }
 

  
}
