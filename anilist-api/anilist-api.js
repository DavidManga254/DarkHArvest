"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnimeByTitle = exports.getAnimeByID = exports.getTrendingAnime = exports.searchAnime = exports.getGenreCollection = exports.getAnimeByGenre = exports.getCurrentSeasonAnime = exports.getAnimeBySeasonAndYear = exports.currentSeason = exports.seasons = exports.currentYear = exports.AnimeInformation = void 0;
var anilistApiEntrypoint = 'https://graphql.anilist.co';
// Initialising global query variables
var getAnimeByIDQuery = "\n# Retrieves the anime matching the provided id, returns a result\nquery getAnimeByID($id: Int) {\n  Media(id: $id, type: ANIME) {\n    # ...AnimeInfomation\n    id\n    title {\n      english \n      romaji\n    }\n    coverImage {\n      large\n    }\n    startDate {\n      year\n      month\n      day\n    }\n    endDate {\n      year\n      month\n      day\n    }\n    studios(isMain: true) {\n      nodes {\n        name\n      }\n    }\n    nextAiringEpisode { \n      airingAt\n      timeUntilAiring\n      episode\n    }\n    rankings { # Consider only the first two list elements, ranking by Ratings and by Popularity \n      rank\n      year\n    }\n    trailer { \n      site\n      id\n    }\n    bannerImage\n    status\n    episodes\n    season\n    description\n    meanScore\n    genres\n    }\n}\n";
var getAnimeByTitleQuery = "\n# Retrieves the FIRST search result of the anime matching the provided title, returns the FIRST search result\nquery getAnimeByTitle($query: String) {\n    Media(search: $query, type: ANIME) {\n      # ...AnimeInfomation\n      id\n      title {\n        english \n        romaji\n      }\n      coverImage {\n        large\n      }\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      studios(isMain: true) {\n        nodes {\n          name\n        }\n      }\n      nextAiringEpisode { \n        airingAt\n        timeUntilAiring\n        episode\n      }\n      rankings { # Consider only the first two list elements, ranking by Ratings and by Popularity \n        rank\n        year\n      }\n      trailer { \n        site\n        id\n      }\n      bannerImage\n      status\n      episodes\n      season\n      description\n      meanScore\n      genres\n    }\n}\n";
var searchAnimeQuery = "\n# Searches for the specified anime, returns a list of ALL the search results\nquery searchAnime($query: String) {\n  Page {\n    media(search: $query, type: ANIME) {\n      # ...AnimeInfomation\n      id\n      title {\n        english \n        romaji\n      }\n      coverImage {\n        large\n      }\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      studios(isMain: true) {\n        nodes {\n          name\n        }\n      }\n      nextAiringEpisode { \n        airingAt\n        timeUntilAiring\n        episode\n      }\n      rankings { # Consider only the first two list elements, ranking by Ratings and by Popularity \n        rank\n        year\n      }\n      trailer { \n        site\n        id\n      }\n      bannerImage\n      status\n      episodes\n      season\n      description\n      meanScore\n      genres\n      }\n    }\n}";
var getTrendingAnimeQuery = "\nquery getTrendingAnime{\n  Page {\n    media(sort: TRENDING_DESC, type: ANIME) {\n      # ...AnimeInfomation\n      id\n      title {\n        english \n        romaji\n      }\n      coverImage {\n        large\n      }\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      studios(isMain: true) {\n        nodes {\n          name\n        }\n      }\n      nextAiringEpisode { \n        airingAt\n        timeUntilAiring\n        episode\n      }\n      rankings { # Consider only the first two list elements, ranking by Ratings and by Popularity \n        rank\n        year\n      }\n      trailer { \n        site\n        id\n      }\n      bannerImage\n      status\n      episodes\n      season\n      description\n      meanScore\n      genres\n      }\n  }\n}\n";
var getGenreCollectionQuery = "query getGenres{\n  GenreCollection\n}";
var getAnimeByGenreQuery = "query getAnimeByGenre($genre: String, $season: MediaSeason, $seasonYear: Int){\n    Page{\n      media(genre: $genre, season: $season, seasonYear: $seasonYear,type: ANIME){\n    # ...AnimeInfomation\n          id\n          title {\n            english # Can be EMPTY\n            romaji\n          }\n          coverImage {\n            large\n          }\n          startDate {\n            year\n            month\n            day\n          }\n          endDate {\n            year\n            month\n            day\n          }\n          studios(isMain: true) {\n            nodes {\n              name\n            }\n          }\n          nextAiringEpisode { # Can be EMPTY\n            airingAt\n            timeUntilAiring\n            episode\n          }\n          rankings { # Consider only the first two list elements, ranking by Ratings and by Popularity \n            rank\n            year\n          }\n          trailer { # Can be EMPTY\n            site\n            id\n          }\n          bannerImage\n          status\n          episodes\n          season\n          description\n          meanScore\n          genres\n          }\n      }\n  }";
var getAnimeBySeasonAndYearQuery = "query getAnimeBySeasonAndYear($season: MediaSeason, $seasonYear: Int){\n  \tPage{\n      media(season: $season, seasonYear: $seasonYear, type: ANIME){\n          # ...AnimeInfomation\n        id\n        title {\n          english # Can be EMPTY\n          romaji\n        }\n        coverImage {\n          large\n        }\n        startDate {\n          year\n          month\n          day\n        }\n        endDate {\n          year\n          month\n          day\n        }\n        studios(isMain: true) {\n          nodes {\n            name\n          }\n        }\n        nextAiringEpisode { # Can be EMPTY\n          airingAt\n          timeUntilAiring\n          episode\n        }\n        rankings { # Consider only the first two list elements, ranking by Ratings and by Popularity \n          rank\n          year\n        }\n        trailer { # Can be EMPTY\n          site\n          id\n        }\n        bannerImage\n        status\n        episodes\n        season\n        description\n        meanScore\n        genres\n        }\n    } \n}";
/**
 * Contains details and information of an anime, sourced from AniList.
 * Almost all of these attributes can be undefined for cases where the detail isn't contained in their database.
 */
var AnimeInformation = /** @class */ (function () {
    function AnimeInformation() {
    }
    return AnimeInformation;
}());
exports.AnimeInformation = AnimeInformation;
var date = new Date();
/**
 * The current year
 */
exports.currentYear = date.getFullYear();
/**
 * Array of seasons
 */
exports.seasons = ['WINTER', 'SPRING', 'SUMMER', 'FALL'];
/**
 * The current season
 */
exports.currentSeason = exports.seasons[Math.floor((date.getMonth() + 1) / 3) % 4];
function createOptions(query, variables) {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ query: query, variables: variables }),
    };
}
/**
 * Retrieves a list of anime that aired/will air by the provided season and year
 * @param season The season the anime aired/will air, can be one of
 * 'WINTER',
 * 'SPRING'.
 * 'SUMMER',
 * 'FALL'
 * @param seasonYear The year the anime aired/will air
 * @returns {(AnimeInformation[] | Error)} An array of {@link AnimeInformation} objects or an {@link Error}
 */
function getAnimeBySeasonAndYear(season, seasonYear) {
    return __awaiter(this, void 0, void 0, function () {
        var options;
        return __generator(this, function (_a) {
            options = createOptions(getAnimeBySeasonAndYearQuery, { 'season': season, 'seasonYear': seasonYear });
            return [2 /*return*/, fetch(anilistApiEntrypoint, options).then(handlePageResponse)
                    .then(handlePageResult)
                    .catch(handleError)];
        });
    });
}
exports.getAnimeBySeasonAndYear = getAnimeBySeasonAndYear;
/**
 * Retrieves a list of anime that are airing/will air in the current season
 * @returns {(AnimeInformation[] | Error)} An array of {@link AnimeInformation} objects or an {@link Error}
 */
function getCurrentSeasonAnime() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, getAnimeBySeasonAndYear(exports.currentSeason, exports.currentYear)];
        });
    });
}
exports.getCurrentSeasonAnime = getCurrentSeasonAnime;
/**
 * Retrieves a list of anime that have the provided genre
 * @param genre The genre of the anime, can be one of
      'Action',
      'Adventure',
      'Comedy',
      'Drama',
      'Ecchi',
      'Fantasy',
      'Hentai',
      'Horror',
      'Mahou ',
      'Mecha',
      'Music',
      'Mystery',
      'Psychological',
      'Romance',
      'Sci-Fi',
      'Slice of Life',
      'Sports',
      'Supernatural',
      'Thriller'.
 * @param season The season the anime aired/will air, can be one of
      'WINTER',
      'SPRING',
      'SUMMER',
      'FALL'.
 * @param seasonYear The year the anime aired/will air
 * @returns {(AnimeInformation[] | Error)} An array of {@link AnimeInformation} objects or an {@link Error}
 */
function getAnimeByGenre(genre, season, seasonYear) {
    return __awaiter(this, void 0, void 0, function () {
        var options;
        return __generator(this, function (_a) {
            options = createOptions(getAnimeByGenreQuery, { 'genre': genre, 'season': season, 'seasonYear': seasonYear });
            return [2 /*return*/, fetch(anilistApiEntrypoint, options).then(handlePageResponse)
                    .then(handlePageResult)
                    .catch(handleError)];
        });
    });
}
exports.getAnimeByGenre = getAnimeByGenre;
/**
 * Retrieves a list of genres available on the anilist database
 * @returns {(string[] | Error)} an array of strings representing the genres or an {@link Error}
 */
function getGenreCollection() {
    return __awaiter(this, void 0, void 0, function () {
        var options;
        return __generator(this, function (_a) {
            options = createOptions(getGenreCollectionQuery, {});
            return [2 /*return*/, fetch(anilistApiEntrypoint, options).then(handleGenreCollectionResponse)
                    .then(handleGenreCollectionResult)
                    .catch(handleError)];
        });
    });
}
exports.getGenreCollection = getGenreCollection;
function handleGenreCollectionResponse(response) {
    return response.json().then(function (json) {
        if (response.ok) {
            return json;
        }
        else {
            return Promise.reject(json);
        }
    });
}
function handleGenreCollectionResult(json) {
    return json['data']['GenreCollection'];
}
/**
 * Searches for the anime by the provided query
 * @param {string} query - The search query string.
 * @returns {(AnimeInformation[] | Error)} An array of  {@link AnimeInformation} objects or an {@link Error}.
 */
function searchAnime(query) {
    return __awaiter(this, void 0, void 0, function () {
        var options;
        return __generator(this, function (_a) {
            options = createOptions(searchAnimeQuery, { 'query': query });
            return [2 /*return*/, fetch(anilistApiEntrypoint, options).then(handlePageResponse)
                    .then(handlePageResult)
                    .catch(handleError)];
        });
    });
}
exports.searchAnime = searchAnime;
/**
 * Retrieves a list of the current trending anime
 * @returns {(AnimeInformation[] | Error)} An array of {@link AnimeInformation} objects or an {@link Error}.
 */
function getTrendingAnime() {
    return __awaiter(this, void 0, void 0, function () {
        var options;
        return __generator(this, function (_a) {
            options = createOptions(getTrendingAnimeQuery, {});
            return [2 /*return*/, fetch(anilistApiEntrypoint, options).then(handlePageResponse)
                    .then(handlePageResult)
                    .catch(handleError)];
        });
    });
}
exports.getTrendingAnime = getTrendingAnime;
/**
 * Retrieves an anime that has the provided id
 * @param {number} id the ID of the chosen anime
 * @returns {(AnimeInformation | Error)} An  {@link AnimeInformation} object or an {@link Error}.
 */
function getAnimeByID(id) {
    return __awaiter(this, void 0, void 0, function () {
        var options;
        return __generator(this, function (_a) {
            options = createOptions(getAnimeByIDQuery, { 'id': id });
            return [2 /*return*/, fetch(anilistApiEntrypoint, options).then(handleSingleResponse)
                    .then(handleResult)
                    .catch(handleError)];
        });
    });
}
exports.getAnimeByID = getAnimeByID;
/**
 * Retrieves an anime that has the provided title
 * @param {string} title the title of the anime
 * @returns {(AnimeInformation | Error)} An  {@link AnimeInformation} object or an {@link Error}.
 */
function getAnimeByTitle(title) {
    return __awaiter(this, void 0, void 0, function () {
        var options;
        return __generator(this, function (_a) {
            options = createOptions(getAnimeByTitleQuery, { 'query': title });
            return [2 /*return*/, fetch(anilistApiEntrypoint, options).then(handleSingleResponse)
                    .then(handleResult)
                    .catch(handleError)];
        });
    });
}
exports.getAnimeByTitle = getAnimeByTitle;
function handleSingleResponse(response) {
    return response.json().then(function (json) {
        if (response.ok) {
            return json;
        }
        return Promise.reject(json);
    });
}
function handlePageResponse(response) {
    return response.json().then(function (json) {
        if (response.ok) {
            return json;
        }
        return Promise.reject(json);
    });
}
// Didn't specify JSON as type cause then I wouldn't be able to access the attributes cause the typescript compiler doesn't seem to understand JSON object attributes are dynamic
function handleResult(json) {
    var result = json['data']['Media'];
    return createAnimeInformationObject(result);
}
function handlePageResult(json) {
    var animeInfoList = [];
    var results = json['data']['Page']['media'];
    for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
        var result = results_1[_i];
        animeInfoList.push(createAnimeInformationObject(result));
    }
    return animeInfoList;
}
function handleError(error) {
    console.error(error);
    return error;
}
function convertUnixEpochToNormalDateTime(epochTime) {
    var date = new Date(epochTime * 1000); // Convert epoch time to milliseconds
    var year = date.getFullYear();
    var month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-based
    var day = ("0" + date.getDate()).slice(-2);
    var hours = ("0" + date.getHours()).slice(-2);
    var minutes = ("0" + date.getMinutes()).slice(-2);
    var seconds = ("0" + date.getSeconds()).slice(-2);
    var formattedDate = "".concat(hours, ":").concat(minutes, ":").concat(seconds, " ").concat(day, "-").concat(month, "-").concat(year);
    return formattedDate;
}
// Helper pseudo monad to check for undefined, null or empty array values, only applies the function/transformer if the passed object is not undefined/null/empty array
function applyFunctionIfNotUndefined(obj, func) {
    if (obj !== undefined && obj !== null) {
        if ((obj === null || obj === void 0 ? void 0 : obj.length) <= 0) {
            return undefined;
        }
        return func(obj);
    }
    return undefined;
}
// Does nothing lol, used when no transformation is to be applied to the item before it is loaded into animeInformation as an attribute
function doNothing(obj) { return obj; }
function createAnimeInformationObject(json) {
    var animeInfo = new AnimeInformation();
    animeInfo.title = { english: applyFunctionIfNotUndefined(json['title']['english'], doNothing), romaji: applyFunctionIfNotUndefined(json['title']['romaji'], doNothing) };
    animeInfo.id = applyFunctionIfNotUndefined(json['id'], doNothing);
    animeInfo.coverImage = applyFunctionIfNotUndefined(json['coverImage']['large'], doNothing);
    animeInfo.bannerImage = applyFunctionIfNotUndefined(json['bannerImage'], doNothing);
    animeInfo.status = applyFunctionIfNotUndefined(json['status'], doNothing);
    animeInfo.episodes = applyFunctionIfNotUndefined(json['episodes'], doNothing);
    animeInfo.season = applyFunctionIfNotUndefined(json['season'], doNothing);
    animeInfo.description = applyFunctionIfNotUndefined(json['description'], doNothing);
    animeInfo.meanScore = applyFunctionIfNotUndefined(json['meanScore'], doNothing);
    animeInfo.genres = applyFunctionIfNotUndefined(json['genres'], doNothing);
    animeInfo.studio = applyFunctionIfNotUndefined(json['studios']['nodes'], function (nodes) { return nodes[0]['name']; });
    var rankings = applyFunctionIfNotUndefined(json['rankings'], function (list) { return list.length >= 2 ? (list.slice(0, 2)) : (undefined); });
    animeInfo.rank = rankings ? { popularity: rankings[0]['rank'], rating: rankings[1]['rank'], year: applyFunctionIfNotUndefined(rankings[0]['year'], doNothing) ? rankings[0]['year'] : 0 } : undefined;
    animeInfo.trailer = applyFunctionIfNotUndefined(json['trailer'], function (trailer) { return trailer['site'] == 'youtube' ? "https://youtube.com/watch?v=".concat(json['trailer']['id']) : "https:/dailymotion.com/video/".concat(json['trailer']['id']); });
    var dateAnime = json['startDate'];
    animeInfo.startDate = dateAnime['day'] && dateAnime['month'] && dateAnime['year'] ? "".concat(dateAnime['day'], "-").concat(dateAnime['month'], "-").concat(dateAnime['year']) : undefined;
    dateAnime = json['endDate'];
    animeInfo.endDate = dateAnime['day'] && dateAnime['month'] && dateAnime['year'] ? "".concat(dateAnime['day'], "-").concat(dateAnime['month'], "-").concat(dateAnime['year']) : undefined;
    animeInfo.nextAiringEpisode = applyFunctionIfNotUndefined(json['nextAiringEpisode'], function (nxtAirEps) {
        return { timeUntilAiring: applyFunctionIfNotUndefined(nxtAirEps['timeUntilAiring'], function (time) {
                if (time >= 86400) {
                    return "".concat(Math.round(time / 86400), " days");
                }
                else if (time >= 3600) {
                    return "".concat(Math.round(time / 3600), " hours");
                }
                else if (time >= 60) {
                    return "".concat(Math.round(time / 60), " minutes");
                }
                else {
                    return "".concat(time, " seconds");
                }
            }),
            airingOn: applyFunctionIfNotUndefined(nxtAirEps['airingAt'], convertUnixEpochToNormalDateTime),
            episode: applyFunctionIfNotUndefined(nxtAirEps['episode'], doNothing) };
    });
    return animeInfo;
}
// TESTS ( ALL PASSED TESTS ) 🐐
// getCurrentSeasonAnime().then((results)=>{console.log(results)})
// getAnimeByGenre('Action', 'SUMMER', 2023).then( (results)=>{console.log(results)})
// getAnimeBySeasonAndYear('SPRING', 2021).then( (results)=>{console.log(results)})
// getGenreCollection().then( (genres)=>{console.log(genres)})
// searchAnime('Bleach').then( (results) => { console.log(results) });
// getTrendingAnime().then( (results) => { console.log(results) });
// getAnimeByID(20).then( (result) => { console.log(result) }); // Naruto's ID is 20 on the anilist database
// getAnimeByTitle('Jujutsu Kaisen Season 2').then( (result) => { console.log(result) });
