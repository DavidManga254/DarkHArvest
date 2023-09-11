const main = require('../../../main');

module.exports.updateWindowDownloadProgress = function(currentEpisode, finalEpisode) {
    let fraction = currentEpisode/finalEpisode;

    main.returnMainWindow().setProgressBar(fraction);
}