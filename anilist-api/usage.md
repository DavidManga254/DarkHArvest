# Importation

```typescript
import { searchAnime, getTrendingAnime, getAnimeByID, getAnimeByTitle, AnimeInformation, getCurrentSeasonAnime, getAnimeBySeasonAndYear, getAnimeByGenre, getGenreCollection } from 'path/to/anilist-api.js';
```

- Replace `'path/to/anilist-api.js'` with the path to the file depending on how you have your directories set up.
- Note that the compiled [**JavaScript**](https://github.com/DavidManga254/DarkHArvest/blob/anilist-api/anilist-api/anilist-api.js) file is imported instead of the [**TypeScript**](https://github.com/DavidManga254/DarkHArvest/blob/anilist-api/anilist-api/anilist-api.ts) file.

## Usage Documentation

### `searchAnime(query, page, [perPage])`

Searches for anime based on the provided query.

- `query` (string): The search query string.
- `page` (number): The page number.
- `perPage` (optional, number): The count of results per page, not exceeding 50. Default: 50.

Returns: `Promise<[AnimeInformation[], boolean]>` or `Error`. The array contains `AnimeInformation` objects, and the boolean indicates whether there is a next page.

Example:

*These are just simple barebones examples, remember to catch and handle errors appropriately*
```javascript
const [animeList, hasNextPage] = await searchAnime('Naruto', 1, 10);
```

### `getTrendingAnime(page, [perPage])`

Retrieves a list of currently trending anime.

- `page` (number): The page number.
- `perPage` (optional, number): The count of results per page, not exceeding 50. Default: 50.

Returns: `Promise<[AnimeInformation[], boolean]>` or `Error`. The array contains `AnimeInformation` objects, and the boolean indicates whether there is a next page.

Example:
```javascript
const [animeList, hasNextPage] = await getTrendingAnime(1, 20);
```

### `getAnimeByID(id)`

Retrieves anime information based on the provided ID.

- `id` (number): The ID of the anime.

Returns: `Promise<AnimeInformation>` or `Error`. The `AnimeInformation` object contains details about the anime.

Example:
```javascript
const anime = await getAnimeByID(12345);
```

### `getAnimeByTitle(title)`

Retrieves anime information based on the provided title.

- `title` (string): The title of the anime.

Returns: `Promise<AnimeInformation>` or `Error`. The `AnimeInformation` object contains details about the anime.

Example:
```javascript
const anime = await getAnimeByTitle('Attack on Titan');
```

### `getAnimeBySeasonAndYear(season, seasonYear, page, [perPage])`

Retrieves a list of anime that aired/will air in the provided season and year.

- `season` (string): The season the anime aired/will air. Valid values: 'WINTER', 'SPRING', 'SUMMER', 'FALL'.
- `seasonYear` (number): The year the anime aired/will air.
- `page` (number): The page number.
- `perPage` (optional, number): The count of results per page, not exceeding 50. Default: 50.

Returns: `Promise<[AnimeInformation[], boolean]>` or `Error`. The array contains `AnimeInformation` objects, and the boolean indicates whether there is a next page.

Example:
```javascript
const [animeList, hasNextPage] = await getAnimeBySeasonAndYear('WINTER', 2022, 1, 25);
```

### `getCurrentSeasonAnime(page, [perPage])`

Retrieves a list of anime that are airing/will air in the current season.

- `page` (number): The page number.
- `perPage` (optional, number): The count of results per page, not exceeding 50. Default: 50.

Returns: `Promise<[AnimeInformation[], boolean]>` or `Error`. The array contains `AnimeInformation` objects, and the boolean indicates whether there is a next page.

Example:
```javascript
const [animeList, hasNextPage] = await getCurrentSeasonAnime(1, 10);
```

### `getAnimeByGenre(genre, season, seasonYear, page, [perPage])`

Retrieves a list of anime that have the provided genre.

- `genre` (string): The genre of the anime. Valid values: 'Action', 'Adventure', 'Comedy', 'Drama', 'Ecchi', 'Fantasy', 'Hentai', 'Horror', 'Mahou', 'Mecha', 'Music', 'Mystery', 'Psychological', 'Romance', 'Sci-Fi', 'Slice of Life', 'Sports', 'Supernatural', 'Thriller'.
- `season` (string): The season the anime aired/will air. Valid values: 'WINTER', 'SPRING', 'SUMMER', 'FALL'.
- `seasonYear` (number): The year the anime aired/will air.
- `page` (number): The page number.
- `perPage` (optional, number): The count of results per page, not exceeding 50. Default: 50.

Returns: `Promise<[AnimeInformation[], boolean]>` or `Error`. The array contains `AnimeInformation` objects, and the boolean indicates whether there is a next page.

Example:
```javascript
const [animeList, hasNextPage] = await getAnimeByGenre('Romance', 'SUMMER', 2023, 1, 15);
```

### `getGenreCollection()`

Retrieves a list of genres available in the AniList database.

Returns: `Promise<string[]>` or `Error`. The array contains strings representing the genres.

Example:
```javascript
const genreList = await getGenreCollection();
```

# AnimeInformation

Contains details and information of an anime sourced from AniList. Almost all of these attributes can be undefined for cases where the detail isn't contained in their database.

## Attributes

- **id**: `number | undefined`\
  Anime ID as it is in the AniList database.

- **title**: `object | undefined`\
  Anime title in English and Japanese.
  - **english**: `string | undefined`\
    Anime title in English. (e.g., Attack on Titan)
  - **romaji**: `string | undefined`\
    Anime title in Japanese. (e.g., Shingeki No Kyojin)

- **coverImage**: `string | undefined`\
  Direct URL to the cover image.

- **startDate**: `string | undefined`\
  Date the anime started airing, in the format D-M-Y.

- **endDate**: `string | undefined`\
  Date the anime ended airing, in the format D-M-Y.

- **studio**: `string | undefined`\
  Main studio that made the anime.

- **nextAiringEpisode**: `object | undefined`\
  Information about the next airing episode.
  - **airingOn**: `string | undefined`\
    Date when the next episode will air, in the format H:M:S D-M-Y.
  - **timeUntilAiring**:

 `string | undefined`\
    Time remaining before the next episode airs. The format depends on the duration. Please check line 403.
  - **episode**: `number | undefined`\
    The number of the episode that will air.

- **rank**: `object | undefined`\
  Ranking information of the anime based on popularity and rating.
  - **popularity**: `number`\
    Rank of the anime based on popularity.
  - **rating**: `number`\
    Rank of the anime based on rating.
  - **year**: `number | undefined`\
    Year the ranking was made. When the year is zero, it means the rank is of ALL TIME.

- **trailer**: `string | undefined`\
  Direct URL to the anime's trailer, sourced from YouTube or Dailymotion.

- **bannerImage**: `string | undefined`\
  Direct URL to the anime's banner image.

- **status**: `string | undefined`\
  Airing status of the anime, e.g., FINISHED, RELEASING.

- **episodes**: `number | undefined`\
  Total number of episodes the anime has.

- **season**: `string | undefined`\
  Season the anime aired in.

- **description**: `string | undefined`\
  Brief summary of the anime.

- **meanScore**: `number | undefined`\
  Mean score rating of the anime.

- **genres**: `string[] | undefined`\
  List of genres the anime belongs to.

Please make sure to update the path to the `anilist-api.js` file according to your directory structure.
