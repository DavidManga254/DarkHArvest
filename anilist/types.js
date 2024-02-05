"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GENRE = exports.getSeasonsList = exports.SEASON = void 0;
var SEASON;
(function (SEASON) {
    SEASON["WINTER"] = "WINTER";
    SEASON["SPRING"] = "SPRING";
    SEASON["SUMMER"] = "SUMMER";
    SEASON["FALL"] = "FALL";
})(SEASON || (exports.SEASON = SEASON = {}));
function getSeasonsList() {
    return [SEASON.WINTER, SEASON.SPRING, SEASON.SUMMER, SEASON.FALL];
}
exports.getSeasonsList = getSeasonsList;
var GENRE;
(function (GENRE) {
    GENRE["ACTION"] = "Action";
    GENRE["ADVENTURE"] = "Adventure";
    GENRE["COMEDY"] = "Comedy";
    GENRE["DRAMA"] = "Drama";
    GENRE["ECCHI"] = "Ecchi";
    GENRE["FANTASY"] = "Fantasy";
    GENRE["HENTAI"] = "Hentai";
    GENRE["HORROR"] = "Horror";
    GENRE["MAHOU"] = "Mahou";
    GENRE["MECHA"] = "Mecha";
    GENRE["MUSIC"] = "Music";
    GENRE["MYSTERY"] = "Mystery";
    GENRE["PSYCHOLOGICAL"] = "Psychological";
    GENRE["ROMANCE"] = "Romance";
    GENRE["SCI_FI"] = "Sci-Fi";
    GENRE["SLICE_OF_LIFE"] = "Slice of Life";
    GENRE["SPORTS"] = "Sports";
    GENRE["SUPERNATURAL"] = "Supernatural";
    GENRE["THRILLER"] = "Thriller";
})(GENRE || (exports.GENRE = GENRE = {}));
