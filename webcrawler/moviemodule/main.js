const Browser = require('../browserinstance/browser.js');
const searcher = require('./search movie & download/searchMovie.js');
(async()=>{
    const {page,browser} =await  Browser.createPageWithViewport('yes','movie');
    console.log('browser created now searching');

    await searcher.searchMovie(page,browser,'black adam')

})();