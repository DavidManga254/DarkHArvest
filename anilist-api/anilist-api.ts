const anilistApiEntrypoint = 'https://graphql.anilist.co';

// Initialising global query variables

const getAnimeByIDQuery: string =
 `
query getAnimeByID($id: Int) {
  Media(id: $id, type: ANIME) {
    # ...AnimeInfomation
    id
    title {
      english 
      romaji
    }
    coverImage {
      large
    }
    startDate {
      year
      month
      day
    }
    endDate {
      year
      month
      day
    }
    studios(isMain: true) {
      nodes {
        name
      }
    }
    nextAiringEpisode { 
      airingAt
      timeUntilAiring
      episode
    }
    rankings { # Consider only the first two list elements, ranking by Ratings and by Popularity 
      rank
      year
    }
    trailer { 
      site
      id
    }
    bannerImage
    status
    episodes
    season
    description
    meanScore
    genres
    }
}
`;

const getAnimeByTitleQuery: string = 
`
# Retrieves the FIRST search result of the anime matching the provided title, returns the FIRST search result
query getAnimeByTitle($query: String) {
    Media(search: $query, type: ANIME) {
      # ...AnimeInfomation
      id
      title {
        english 
        romaji
      }
      coverImage {
        large
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      studios(isMain: true) {
        nodes {
          name
        }
      }
      nextAiringEpisode { 
        airingAt
        timeUntilAiring
        episode
      }
      rankings { # Consider only the first two list elements, ranking by Ratings and by Popularity 
        rank
        year
      }
      trailer { 
        site
        id
      }
      bannerImage
      status
      episodes
      season
      description
      meanScore
      genres
    }
}
`;

const searchAnimeQuery: string = 
`
query searchAnime($query: String, $page: Int, $perPage: Int) {
  Page(page: $page, perPage: $perPage) {
    pageInfo {
      hasNextPage
    }
    media(search: $query, type: ANIME) {
      # ...AnimeInfomation
      id
      title {
        english # Can be EMPTY
        romaji
      }
      coverImage {
        large
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      studios(isMain: true) {
        nodes {
          name
        }
      }
      nextAiringEpisode { # Can be EMPTY
        airingAt
        timeUntilAiring
        episode
      }
      rankings { # Consider only the first two list elements, ranking by Ratings and by Popularity 
        rank
        year
      }
      trailer { # Can be EMPTY
        site
        id
      }
      bannerImage
      status
      episodes
      season
      description
      meanScore
      genres
      }
    }
}
`;

const getTrendingAnimeQuery: string = 
`
query getTrendingAnime($page: Int, $perPage: Int){
  Page(page: $page, perPage: $perPage) {
    pageInfo{
      hasNextPage
    }
    media(sort: TRENDING_DESC, type: ANIME) {
      # ...AnimeInfomation
      id
      title {
        english # Can be EMPTY
        romaji
      }
      coverImage {
        large
      }
      startDate {
        year
        month
        day
      }
      endDate {
        year
        month
        day
      }
      studios(isMain: true) {
        nodes {
          name
        }
      }
      nextAiringEpisode { # Can be EMPTY
        airingAt
        timeUntilAiring
        episode
      }
      rankings { # Consider only the first two list elements, ranking by Ratings and by Popularity 
        rank
        year
      }
      trailer { # Can be EMPTY
        site
        id
      }
      bannerImage
      status
      episodes
      season
      description
      meanScore
      genres
      }
  }
}
`;

const getGenreCollectionQuery = 
`query getGenres{
  GenreCollection
}`;

const getAnimeByGenreQuery = 
`
query getAnimeByGenre($genre: String, $season: MediaSeason, $seasonYear: Int, $page: Int, $perPage: Int){
  Page(page: $page, perPage: $perPage){
    pageInfo{
      hasNextPage
    }
    media(genre: $genre, season: $season, seasonYear: $seasonYear,type: ANIME){
  # ...AnimeInfomation
        id
        title {
          english # Can be EMPTY
          romaji
        }
        coverImage {
          large
        }
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        studios(isMain: true) {
          nodes {
            name
          }
        }
        nextAiringEpisode { # Can be EMPTY
          airingAt
          timeUntilAiring
          episode
        }
        rankings { # Consider only the first two list elements, ranking by Ratings and by Popularity 
          rank
          year
        }
        trailer { # Can be EMPTY
          site
          id
        }
        bannerImage
        status
        episodes
        season
        description
        meanScore
        genres
        }
    }
}
`;

const getAnimeBySeasonAndYearQuery = 
`
query getAnimeBySeasonAndYear($season: MediaSeason, $seasonYear: Int, $page: Int, $perPage: Int){
  	Page(page: $page, perPage: $perPage){
      pageInfo{
        hasNextPage
      }
      media(season: $season, seasonYear: $seasonYear, type: ANIME){
          # ...AnimeInfomation
        id
        title {
          english # Can be EMPTY
          romaji
        }
        coverImage {
          large
        }
        startDate {
          year
          month
          day
        }
        endDate {
          year
          month
          day
        }
        studios(isMain: true) {
          nodes {
            name
          }
        }
        nextAiringEpisode { # Can be EMPTY
          airingAt
          timeUntilAiring
          episode
        }
        rankings { # Consider only the first two list elements, ranking by Ratings and by Popularity 
          rank
          year
        }
        trailer { # Can be EMPTY
          site
          id
        }
        bannerImage
        status
        episodes
        season
        description
        meanScore
        genres
        }
    }    
}
`;

/**
 * Contains details and information of an anime, sourced from AniList.
 * Almost all of these attributes can be undefined for cases where the detail isn't contained in their database.
 */
export class AnimeInformation {
  /**
   * Anime ID as it's in the AniList database.
   */
  id: number | undefined;

  /**
   * Anime title in English and Japanese.
   */
  title: {
    /**
     * Anime title in English. e.g., Attack on Titan.
     */
    english: string | undefined;
    /**
     * Anime title in Japanese. e.g., Shingeki No Kyojin.
     */
    romaji: string | undefined;
  } | undefined;

  /**
   * Direct URL to the cover image.
   */
  coverImage: string | undefined;

  /**
   * Date the anime started airing, in the format D-M-Y.
   */
  startDate: string | undefined;

  /**
   * Date the anime ended airing, in the format D-M-Y.
   */
  endDate: string | undefined;

  /**
   * Main studio that made the anime.
   */
  studio: string | undefined;

  /**
   * Information about the next airing episode.
   */
  nextAiringEpisode: {
    /**
     * Date when the next episode will air, in the format H:M:S D-M-Y.
     */
    airingOn: string | undefined;
    /**
     * Time remaining before the next episode airs. The format depends on how long it is. Please check line 403.
     */
    timeUntilAiring: string | undefined;
    /**
     * The number of the episode that is to air.
     */
    episode: number | undefined;
  } | undefined;

  /**
   * Ranking information of the anime based on popularity and rating.
   */
  rank: {
    /**
     * Rank of the anime based on popularity.
     */
    popularity: number;
    /**
     * Rank of the anime based on rating.
     */
    rating: number;
    /**
     * Year the ranking was made. When the year is zero, it means the rank is of ALL TIME.
     */
    year: number | undefined;
  } | undefined;

  /**
   * Direct URL to the anime's trailer, sourced from YouTube or Dailymotion.
   */
  trailer: string | undefined;

  /**
   * Direct URL to the anime's banner image.
   */
  bannerImage: string | undefined;

  /**
   * Airing status of the anime, e.g., FINISHED, RELEASING.
   */
  status: string | undefined;

  /**
   * Total number of episodes the anime has.
   */
  episodes: number | undefined;

  /**
   * Season the anime aired in.
   */
  season: string | undefined;

  /**
   * Brief summary of the anime.
   */
  description: string | undefined;

  /**
   * Mean score rating of the anime.
   */
  meanScore: number | undefined;

  /**
   * List of genres the anime is in.
   */
  genres: string[] | undefined;
}
/**
 * Interface for type annotating json repsonse for single result
 */
interface JsonResponseForSingle {
  data: {
    Media: Media;
  };
}

/**
 * Interface for type annotating json response for multiple results
 */
interface JsonResponseForPage {
  data: {
    Page: Page;
  }
}

/**
 * Returned when response contains multiple pages, e.g search result
 */

interface Page {
  pageInfo: {
    hasNextPage: boolean
  };
  media: Media[];
}
/**
 * Returned when response has one result 
 */
interface Media {
  id: string | null;
  title: {
    english: string | null;
    romaji: string | null;
  };
  coverImage: {
    large: string | null;
  };
  startDate: {
    year: number | null;
    month: number | null;
    day: number | null;
  };
  endDate: {
    year: number | null;
    month: number | null;
    day: number | null;
  };
  studios: {
    nodes: {
      name: string | null;
    }[];
  };
  nextAiringEpisode: {
    airingAt: number | null;
    timeUntilAiring: number | null;
    episode: number | null;
  };
  rankings: {
    rank: number | null;
    year: number | null;
  }[];
  trailer: {
    site: string | null;
    id: string | null;
  };
  bannerImage: string | null;
  status: string | null;
  episodes: number | null;
  season: string | null;
  description: string | null;
  meanScore: number | null;
  genres: string[] | null;
}

interface JsonGenreCollection{
  data: {
    GenreCollection: string[]
  }
}

const date = new Date()
/**
 * The current year
 */
export const currentYear = date.getFullYear()
/**
 * An array of seasons
 */
export const seasons = ['WINTER', 'SPRING', 'SUMMER', 'FALL']
/**
 * The current season
 */
export const currentSeason = seasons[Math.floor((date.getMonth()+1) / 3) % 4]

function createOptions(query: string, variables: object) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({query, variables}),
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
 * @param page  The page number
 * @param [perPage=50] The count of results per page, not more than 50
 * @returns {([AnimeInformation[], boolean] | Error)} An array of {@link AnimeInformation} objects and a boolean representing whether there are more page results, or an {@link Error}
 */
export async function getAnimeBySeasonAndYear(season: string, seasonYear: number, page: number, perPage: number=50): Promise<[AnimeInformation[], boolean] | Error> {
    const options = createOptions(getAnimeBySeasonAndYearQuery, {'season': season, 'seasonYear': seasonYear, 'page': page, 'perPage': perPage})
    return fetch(anilistApiEntrypoint, options).then(handlePageResponse)
    .then(handlePageResult)
    .catch(handleError)  
}

/**
 * Retrieves a list of anime that are airing/will air in the current season
 * @param page The page number
 * @param [perPage=50] The count of results per page, not more than 50
 * @returns {([AnimeInformation[], boolean] | Error)} An array of {@link AnimeInformation} and a boolean representing whether there are more page results, objects or an {@link Error}
 */
export async function getCurrentSeasonAnime(page: number, perPage: number=50): Promise<[AnimeInformation[], boolean] | Error> {
    return getAnimeBySeasonAndYear(currentSeason, currentYear, page, perPage)
}

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
      'Thriller'
 * @param season The season the anime aired/will air, can be one of
      'WINTER',
      'SPRING',
      'SUMMER',
      'FALL'
 * @param seasonYear The year the anime aired/will air
 * @param page The page number
 * @param [perPage=50]  The count of results per page, not more than 50
 * @returns {([AnimeInformation[], boolean] | Error)} An array of {@link AnimeInformation} objects and a boolean representing whether there are more page results, or an {@link Error}
 */
export  async function getAnimeByGenre(genre: string, season: string, seasonYear: number, page: number, perPage: number=50): Promise<[AnimeInformation[], boolean] | Error> {
  const options = createOptions(getAnimeByGenreQuery, {'genre': genre, 'season': season, 'seasonYear': seasonYear, 'page': page, 'perPage': perPage})
  return fetch(anilistApiEntrypoint, options).then(handlePageResponse)
  .then(handlePageResult)
  .catch(handleError)
}

/**
 * Retrieves a list of genres available on the anilist database
 * @returns {(string[] | Error)} an array of strings representing the genres or an {@link Error}
 */
export async function getGenreCollection(): Promise<string[] | Error>{
  const options = createOptions(getGenreCollectionQuery, {})
  return fetch(anilistApiEntrypoint, options).then(handleGenreCollectionResponse)
  .then(handleGenreCollectionResult)
  .catch(handleError)
}

function handleGenreCollectionResponse(response: Response): Promise<JsonGenreCollection | never> {
  return response.json().then( (json)=>{
    if (response.ok){ return json}
    else { return Promise.reject(json)}
  })
}

function handleGenreCollectionResult(json: JsonGenreCollection): string[] {
  return json['data']['GenreCollection']
}
  
/** 
 * Searches for the anime by the provided query
 * @param {string} query - The search query string
 * @param page The page number
 * @param [perPage=50] The count of results per page, not more than 50
 * @returns {([AnimeInformation[], boolean] | Error)} An array of  {@link AnimeInformation} objects and a boolean representing whether there are more page results, or an {@link Error}.
 */
export async function searchAnime(query: string, page: number, perPage: number=50): Promise<[AnimeInformation[], boolean] | Error> {
    const options = createOptions(searchAnimeQuery, {'query': query, 'page': page, 'perPage': perPage})
    return fetch(anilistApiEntrypoint, options).then(handlePageResponse)
    .then(handlePageResult)
    .catch(handleError);
}

/** 
 * Retrieves a list of the current trending anime
 * @param page The page number
 * @param [perPage=50] The count of results per page, not more than 50
 * @returns {([AnimeInformation[], boolean] | Error)} An array of {@link AnimeInformation} objects and a boolean representing whether there are more page results, or an {@link Error}.
 */
export async function getTrendingAnime(page: number, perPage: number=50): Promise<[AnimeInformation[], boolean] | Error>{
    const options = createOptions(getTrendingAnimeQuery, {'page': page, 'perPage': perPage})
    return fetch(anilistApiEntrypoint, options).then(handlePageResponse)
    .then(handlePageResult)
    .catch(handleError);
}

/** 
 * Retrieves an anime that has the provided id
 * @param {number} id the ID of the chosen anime
 * @returns {(AnimeInformation | Error)} An  {@link AnimeInformation} object or an {@link Error}.
 */
export async function getAnimeByID(id: number): Promise<AnimeInformation | Error> {
    const options = createOptions(getAnimeByIDQuery, {'id': id})
    return fetch(anilistApiEntrypoint, options).then(handleSingleResponse)
    .then(handleResult)
    .catch(handleError);
}

/** 
 * Retrieves an anime that has the provided title
 * @param {string} title the title of the anime
 * @returns {(AnimeInformation | Error)} An  {@link AnimeInformation} object or an {@link Error}.
 */
export async function getAnimeByTitle(title: string): Promise<AnimeInformation | Error> {
    const options = createOptions(getAnimeByTitleQuery, {'query': title})
    return fetch(anilistApiEntrypoint, options).then(handleSingleResponse)
    .then(handleResult)
    .catch(handleError);
}


function handleSingleResponse(response: Response): Promise< JsonResponseForSingle | never> {
    return response.json().then( (json)=> {
        if (response.ok) {return json;}
        return Promise.reject(json);
    });
}

function handlePageResponse(response: Response): Promise< JsonResponseForPage | never> {
  return response.json().then(  (json)=> {
    if (response.ok) {return json;}
    return Promise.reject(json)
  })
}

// Didn't specify JSON as type cause then I wouldn't be able to access the attributes cause the typescript compiler doesn't seem to understand JSON object attributes are dynamic
function handleResult (json: JsonResponseForSingle): AnimeInformation {
    const result = json['data']['Media'];
    return createAnimeInformationObject(result);
}

function handlePageResult(json: JsonResponseForPage): [AnimeInformation[], boolean] {
    let animeInfoList: AnimeInformation[] = [];
    const results = json['data']['Page']['media'];
    for (const result of results){
        animeInfoList.push(createAnimeInformationObject(result));
    }
    return [animeInfoList, json['data']['Page']['pageInfo']['hasNextPage']];
}

function handleError(error: Error) {
    console.error(error);
    return error;
}

function convertUnixEpochToNormalDateTime(epochTime: number): string {
    const date = new Date(epochTime * 1000); // Convert epoch time to milliseconds
  
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2); // Months are zero-based
    const day = ("0" + date.getDate()).slice(-2);
    const hours = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const seconds = ("0" + date.getSeconds()).slice(-2);
  
    const formattedDate = `${hours}:${minutes}:${seconds} ${day}-${month}-${year}`;
    return formattedDate;
  }

// Helper pseudo monad to check for undefined, null or empty array values, only applies the function/transformer if the passed object is not undefined/null/empty array
function applyFunctionIfNotUndefined(obj: any, func: Function): any  {
  if (obj !== undefined && obj !== null) { 
    if (obj?.length <= 0) {
      return undefined;}
    return func(obj); }
  return undefined;
  
}

// Does nothing lol, used when no transformation is to be applied to the item before it is loaded into animeInformation as an attribute
function doNothing(obj: any): any{return obj;}

function createAnimeInformationObject (json: Media): AnimeInformation {
    let animeInfo = new AnimeInformation();

    animeInfo.title = {english: applyFunctionIfNotUndefined(json['title']['english'], doNothing), romaji: applyFunctionIfNotUndefined(json['title']['romaji'], doNothing)}
    animeInfo.id = applyFunctionIfNotUndefined(json['id'], doNothing);
    animeInfo.coverImage = applyFunctionIfNotUndefined(json['coverImage']['large'], doNothing);
    animeInfo.bannerImage = applyFunctionIfNotUndefined(json['bannerImage'], doNothing);
    animeInfo.status = applyFunctionIfNotUndefined(json['status'], doNothing);
    animeInfo.episodes = applyFunctionIfNotUndefined(json['episodes'], doNothing);
    animeInfo.season = applyFunctionIfNotUndefined(json['season'], doNothing);
    animeInfo.description = applyFunctionIfNotUndefined(json['description'], doNothing);
    animeInfo.meanScore = applyFunctionIfNotUndefined(json['meanScore'], doNothing);
    animeInfo.genres = applyFunctionIfNotUndefined(json['genres'], doNothing);    
    animeInfo.studio = applyFunctionIfNotUndefined(json['studios']['nodes'], (nodes: Array<{name: string}>)=>{return nodes[0]['name']});
    const rankings = applyFunctionIfNotUndefined(json['rankings'], (list: Array<{rank: number, year: number}>)=>{return list.length >= 2 ? (list.slice(0, 2)) : (undefined)});
    animeInfo.rank = rankings ? {popularity: rankings[0]['rank'], rating: rankings[1]['rank'], year: applyFunctionIfNotUndefined(rankings[0]['year'], doNothing) ? rankings[0]['year'] : 0} : undefined;
    animeInfo.trailer = applyFunctionIfNotUndefined(json['trailer'], 
    (trailer: {site: string, id: string}) => { return trailer['site'] == 'youtube' ? `https://youtube.com/watch?v=${json['trailer']['id']}` : `https:/dailymotion.com/video/${json['trailer']['id']}`});
    let dateAnime = json['startDate'];
    animeInfo.startDate = dateAnime['day'] && dateAnime['month'] && dateAnime['year'] ? `${dateAnime['day']}-${dateAnime['month']}-${dateAnime['year']}` : undefined;
    dateAnime = json['endDate'];
    animeInfo.endDate = dateAnime['day'] && dateAnime['month'] && dateAnime['year'] ? `${dateAnime['day']}-${dateAnime['month']}-${dateAnime['year']}` : undefined;

    animeInfo.nextAiringEpisode = applyFunctionIfNotUndefined(json['nextAiringEpisode'], (nxtAirEps: {timeUntilAiring: number, airingAt: number, episode: number}) => 
    { return {timeUntilAiring: applyFunctionIfNotUndefined(nxtAirEps['timeUntilAiring'],
    (time: number)=>{
      if (time >= 86400) { return `${Math.round(time / 86400)} days`;}
                else if (time >= 3600) { return `${Math.round(time / 3600)} hours`;}
                else if (time >= 60) { return `${Math.round(time / 60)} minutes`;}
                else { return `${time} seconds`;}
    }),
    airingOn: applyFunctionIfNotUndefined(nxtAirEps['airingAt'], convertUnixEpochToNormalDateTime),
    episode: applyFunctionIfNotUndefined(nxtAirEps['episode'], doNothing)
  } });
   return animeInfo;
}

// TESTS ( ALL PASSED TESTS ) 🐐

// getCurrentSeasonAnime(1).then((results)=>{console.log(results)})
// getAnimeByGenre('Action', 'SUMMER', 2023, 1).then( (results)=>{console.log(results)})
// getAnimeBySeasonAndYear('SPRING', 2021, 1).then( (results)=>{console.log(results)})
// getGenreCollection().then( (genres)=>{console.log(genres)})
// searchAnime('Bleach', 1).then( (results) => { console.log(results) });
// getTrendingAnime(1).then( (results) => { console.log(results) });
// getAnimeByID(20).then( (result) => { console.log(result) }); // Naruto's ID is 20 on the anilist database
// getAnimeByTitle('Jujutsu Kaisen Season 2').then( (result) => { console.log(result) });
