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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAnimeByTitle = exports.getAnimeByID = exports.getTrendingAnime = exports.searchAnime = exports.getAnimeByGenre = exports.getCurrentSeasonAnime = exports.getAnimeBySeasonAndYear = void 0;
const queries_1 = require("./queries");
const constants_1 = require("./constants");
const client_1 = require("./client");
/**
 * Retrieves a list of anime that aired/will air by the provided season and year
 * @param season The season the anime aired/will air
 * @param seasonYear The year the anime aired/will air
 * @param [page=1]  The page number
 * @param [perPage=50] The count of results per page, not more than 50
 * @returns {[AnimeInformation[], boolean]} An array of {@link AnimeInformation} objects and a boolean representing whether there are more page results
 */
function getAnimeBySeasonAndYear(season, seasonYear, page = 1, perPage = 50) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = { 'season': season, 'seasonYear': seasonYear, 'page': page, 'perPage': perPage };
        return (0, client_1.apiPageRequest)(queries_1.GET_ANIME_BY_SEASON_AND_YEAR, variables);
    });
}
exports.getAnimeBySeasonAndYear = getAnimeBySeasonAndYear;
/**
 * Retrieves a list of anime that are airing/will air in the current season
 * @param [page=1] The page number
 * @param [perPage=50] The count of results per page, not more than 50
 * @returns {[AnimeInformation[], boolean]} An array of {@link AnimeInformation} objects and a boolean representing whether there are more page results
 */
function getCurrentSeasonAnime(page = 1, perPage = 50) {
    return __awaiter(this, void 0, void 0, function* () {
        return getAnimeBySeasonAndYear(constants_1.CURRENT_SEASON, constants_1.CURRENT_YEAR, page, perPage);
    });
}
exports.getCurrentSeasonAnime = getCurrentSeasonAnime;
/**
 * Retrieves a list of anime that have the provided genre
 * @param genre The genre of the anime
 * @param season The season the anime aired/will air
 * @param seasonYear The year the anime aired/will air
 * @param [page=1] The page number
 * @param [perPage=50]  The count of results per page, not more than 50
 * @returns {([AnimeInformation[], boolean])} An array of {@link AnimeInformation} objects and a boolean representing whether there are more page results
 */
function getAnimeByGenre(genre, season = constants_1.CURRENT_SEASON, seasonYear = constants_1.CURRENT_YEAR, page = 1, perPage = 50) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = { 'genre': genre, 'season': season, 'seasonYear': seasonYear, 'page': page, 'perPage': perPage };
        return (0, client_1.apiPageRequest)(queries_1.GET_ANIME_BY_GENRE, variables);
    });
}
exports.getAnimeByGenre = getAnimeByGenre;
/**
 * Searches for the anime by the provided query
 * @param {string} query - The search query string
 * @param [page=1] The page number
 * @param [perPage=50] The count of results per page, not more than 50
 * @returns {[AnimeInformation[], boolean]} An array of  {@link AnimeInformation} objects and a boolean representing whether there are more page results
 */
function searchAnime(query, page = 1, perPage = 50) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = { 'query': query, 'page': page, 'perPage': perPage };
        return (0, client_1.apiPageRequest)(queries_1.SEARCH_ANIME, variables);
    });
}
exports.searchAnime = searchAnime;
/**
 * Retrieves a list of the current trending anime
 * @param [page] The page number
 * @param [perPage=50] The count of results per page, not more than 50
 * @returns {[AnimeInformation[], boolean]} An array of {@link AnimeInformation} objects and a boolean representing whether there are more page results
 */
function getTrendingAnime(page = 1, perPage = 50) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = { 'page': page, 'perPage': perPage };
        return (0, client_1.apiPageRequest)(queries_1.GET_TRENDING_ANIME, variables);
    });
}
exports.getTrendingAnime = getTrendingAnime;
/**
 * Retrieves an anime that has the provided id
 * @param {number} id ID of the anime
 */
function getAnimeByID(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = { 'id': id };
        return (0, client_1.apiSingleRequest)(queries_1.GET_ANIME_BY_ID, variables);
    });
}
exports.getAnimeByID = getAnimeByID;
/**
 * Retrieves an anime that has the provided title
 * @param {string} title Title of the anime
 */
function getAnimeByTitle(title) {
    return __awaiter(this, void 0, void 0, function* () {
        const variables = { 'query': title };
        return (0, client_1.apiSingleRequest)(queries_1.GET_ANIME_BY_TITLE, variables);
    });
}
exports.getAnimeByTitle = getAnimeByTitle;
