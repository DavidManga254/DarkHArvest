# Importation
```typescript
import {searchAnime, getTrendingAnime, getAnimeByID, getAnimeByTitle, AnimeInformation, getCurrentSeasonAnime, getAnimeBySeasonAndYear, getAnimeByGenre, getGenreCollection} from 'path/to/anilist-api.js';
```
- Replace
```typescript
  'path/to/anilist-api.js' 
```
with the path to the file depending on how you have your directories set up
- Note that the compiled [**JavaScript**](https://github.com/DavidManga254/DarkHArvest/blob/anilist-api/anilist-api/anilist-api.js) file instead of the **TypeScript** file is imported
  
# Examples  

## Searching for an anime
```typescript
searchAnime("Attack on Titan").then( (animeInfos: AnimeInformation[] | Error ) => { console.log(animeInfos) } );
```
- The searchAnime function returns a promise that resolves to either an an array of [`AnimeInformation`](#animeinformation) objects or an `Error`
  
## Getting the current trending anime
```typescript
getTrendingAnime().then( (animeInfos: AnimeInformation[] | Error) => { console.log(animeInfos) } );
```
- Similar to the searchAnime function, the getTrendingAnime function returns a promise that resolves to either an array of [`AnimeInformation`](#animeinformation) objects or an `Error`
  
## Getting a specific anime by it's title
- Retrieving an exact anime, by it's title instead of getting many search results
```typescript
getAnimeByTitle("Attack on Titan").then( (animeInfos: AnimeInformation | Error ) => { console.log(animeInfos) } );
```
- Returns a single [`AnimeInformation`](#animeinformation) object which is the topmost search result or an `Error`
  
## Getting a specifc anime by it's ID
- Each anime has a unique identifier as an ID on the database
- Retrieving an exact anime by it's ID
```typescript
getAnimeByID(20).then( (animeInfos: AnimeInformation | Error ) => { console.log(animeInfos) } );
```
- Returns a single [`AnimeInformation`](#animeinformation) object or an `Error`

## Others
- getCurrentSeasonAnime - get list of anime airing/that will air in the current season
- getAnimeBySeasonAndYear - get list of anime by a season and year
- getAnimeByGenre - get list of anime that have a the provided genre 
- getGenreCollection - get a list of genres available on the anilist database

# AnimeInformation

Contains details and information of an anime, sourced from AniList. Almost all of these attributes can be undefined for cases where the detail isn't contained in their database.

## Attributes

- **id**: `number | undefined`\
  Anime ID as it's in the AniList database.

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
  - **timeUntilAiring**: `string | undefined`\
    Time remaining before the next episode airs. The format depends on how long it is. Please check line 403.
  - **episode**: `number | undefined`\
    The number of the episode that is to air.

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
  List of genres the anime is in.
e
