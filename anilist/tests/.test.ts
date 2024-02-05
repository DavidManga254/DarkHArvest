import {
  searchAnime, getTrendingAnime, getAnimeByID, getAnimeByTitle, getCurrentSeasonAnime,
  getAnimeBySeasonAndYear, getAnimeByGenre
} from '../api.js';
import { GENRE, SEASON } from '../types.js';
import { describe, test } from "bun:test";

const LOG_ALL_RESULTS = false;

function logger(result: any, log = false): void {
  if (LOG_ALL_RESULTS || log) {
    console.log(result);
  }
}


describe('Anilist API Tests', () => {
  test('getCurrentSeasonAnime', async () => {
    logger(await getCurrentSeasonAnime())

  });

  test('getAnimeByGenre', async () => {
    logger(await getAnimeByGenre(GENRE.ACTION))
  });

  test('getAnimeBySeasonAndYear', async () => {
    logger(await getAnimeBySeasonAndYear(SEASON.FALL, 2021, 1));
  });

  test('searchAnime', async () => {
    logger(await searchAnime('Bleach', 1));
  });

  test('getTrendingAnime', async () => {
    logger(await getTrendingAnime());
  });

  test('getAnimeByID', async () => {
    logger(await getAnimeByID(20));// Naruto's ID on Anilist is 20 
  });

  test('getAnimeByTitle', async () => {
    logger(await getAnimeByTitle('Jujutsu Kaisen'));
  });

  test('getAnimeByGenre', async () => {
    logger(await getAnimeByGenre(GENRE.ACTION));
  });
});