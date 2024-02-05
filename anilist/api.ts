import { GET_TRENDING_ANIME, GET_ANIME_BY_GENRE, GET_ANIME_BY_SEASON_AND_YEAR, GET_ANIME_BY_ID, GET_ANIME_BY_TITLE, SEARCH_ANIME } from "./queries";
import { CURRENT_SEASON, CURRENT_YEAR } from "./constants";
import { AnimeInformation, SEASON, GENRE } from "./types";
import { apiPageRequest, apiSingleRequest } from "./client";


/**
 * Retrieves a list of anime that aired/will air by the provided season and year
 * @param season The season the anime aired/will air
 * @param seasonYear The year the anime aired/will air
 * @param [page=1]  The page number
 * @param [perPage=50] The count of results per page, not more than 50
 * @returns {[AnimeInformation[], boolean]} An array of {@link AnimeInformation} objects and a boolean representing whether there are more page results
 */
export async function getAnimeBySeasonAndYear(season: SEASON, seasonYear: number, page = 1, perPage = 50): Promise<[AnimeInformation[], boolean]> {
  const variables = { 'season': season, 'seasonYear': seasonYear, 'page': page, 'perPage': perPage }
  return apiPageRequest(GET_ANIME_BY_SEASON_AND_YEAR, variables);
}


/**
 * Retrieves a list of anime that are airing/will air in the current season
 * @param [page=1] The page number
 * @param [perPage=50] The count of results per page, not more than 50
 * @returns {[AnimeInformation[], boolean]} An array of {@link AnimeInformation} objects and a boolean representing whether there are more page results
 */
export async function getCurrentSeasonAnime(page = 1, perPage: number = 50): Promise<[AnimeInformation[], boolean]> {
  return getAnimeBySeasonAndYear(CURRENT_SEASON, CURRENT_YEAR, page, perPage)
}


/**
 * Retrieves a list of anime that have the provided genre
 * @param genre The genre of the anime 
 * @param season The season the anime aired/will air
 * @param seasonYear The year the anime aired/will air
 * @param [page=1] The page number
 * @param [perPage=50]  The count of results per page, not more than 50
 * @returns {([AnimeInformation[], boolean])} An array of {@link AnimeInformation} objects and a boolean representing whether there are more page results
 */
export async function getAnimeByGenre(genre: GENRE, season = CURRENT_SEASON, seasonYear = CURRENT_YEAR, page = 1, perPage = 50): Promise<[AnimeInformation[], boolean]> {
  const variables = { 'genre': genre, 'season': season, 'seasonYear': seasonYear, 'page': page, 'perPage': perPage };
  return apiPageRequest(GET_ANIME_BY_GENRE, variables);
}


/** 
 * Searches for the anime by the provided query
 * @param {string} query - The search query string
 * @param [page=1] The page number
 * @param [perPage=50] The count of results per page, not more than 50
 * @returns {[AnimeInformation[], boolean]} An array of  {@link AnimeInformation} objects and a boolean representing whether there are more page results
 */
export async function searchAnime(query: string, page = 1, perPage = 50): Promise<[AnimeInformation[], boolean]> {
  const variables = { 'query': query, 'page': page, 'perPage': perPage };
  return apiPageRequest(SEARCH_ANIME, variables);
}


/** 
 * Retrieves a list of the current trending anime
 * @param [page] The page number
 * @param [perPage=50] The count of results per page, not more than 50
 * @returns {[AnimeInformation[], boolean]} An array of {@link AnimeInformation} objects and a boolean representing whether there are more page results
 */
export async function getTrendingAnime(page = 1, perPage = 50): Promise<[AnimeInformation[], boolean]> {
  const variables = { 'page': page, 'perPage': perPage };
  return apiPageRequest(GET_TRENDING_ANIME, variables);
}


/** 
 * Retrieves an anime that has the provided id
 * @param {number} id ID of the anime
 */
export async function getAnimeByID(id: number): Promise<AnimeInformation> {
  const variables = { 'id': id };
  return apiSingleRequest(GET_ANIME_BY_ID, variables);
}


/** 
 * Retrieves an anime that has the provided title
 * @param {string} title Title of the anime
 */
export async function getAnimeByTitle(title: string): Promise<AnimeInformation> {
  const variables = { 'query': title };
  return apiSingleRequest(GET_ANIME_BY_TITLE, variables);
}
