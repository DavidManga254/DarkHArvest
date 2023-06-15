const anilistApiEntrypoint = 'https://graphql.anilist.co';

// Initialising global query variables

const getAnimeByIDQuery: string =
 `
# Retrieves the anime matching the provided id, returns a result
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
# Searches for the specified anime, returns a list of ALL the search results
query searchAnime($query: String) {
  Page {
    media(search: $query, type: ANIME) {
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
}
`;

const getTrendingAnimeQuery: string = 
`
# Retrieves the trending anime, returns a list of the trending anime
query getTrendingAnime{
  Page {
    media(sort: TRENDING_DESC, type: ANIME) {
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
}
`;

// Contains details and information of an anime, sourced from anilist
// Almost all of these attributes can be undefined for cases where the detail isn't contained in their database
class AnimeInformation {
    id: number | undefined;// Anime ID as it's in the anilist database
    title: {
      english: string | undefined; // Anime title in English e.g Attack on Titan
      romaji: string | undefined; // Anime title in Japanese e.g Shingeki No Kyojin
    } | undefined;
    coverImage: string | undefined; // Direct url to the cover image
    startDate: string | undefined; // Date the anime started airing, in the format D-M-Y
    endDate: string | undefined; // Date the anime ended airing, in the format D-M-Y
    studio: string | undefined; // Main studio that made the anime
    nextAiringEpisode: {
      airingOn: string |undefined; // Date when the next episode will air, in the format H:M:S D-M-Y
      timeUntilAiring: string | undefined; // Time remaining before next episode airs, format depends on how long it is, check line 403
      episode: number | undefined; // The number of the episode that is to air
    } | undefined;
    rank: {
      popularity: number // Rank of the anime based off popularity
      rating: number // Rank of the anime based off rating
      year: number | undefined// Year the ranking was made, when year is zero it means the rank is of ALL TIME
    } | undefined
    trailer: string | undefined; // Direct url to the anime's trailer, sources youtube or dailymotion, one of either
    bannerImage: string | undefined; // Direct url to the anime's banner image
    status: string | undefined; // Airing status, e.g FINISHED, RELEASING   
    episodes: number | undefined; // Total number of episodes the anime has
    season: string | undefined; // Season the anime aired in 
    description: string | undefined; // Brief summary of the anime
    meanScore: number | undefined; // Mean score rating of the anime
    genres: string[] | undefined; // List of genres the anime is in
  
  }
  
// Search for an anime by a query, returns a list of results as AnimeInformation objects or an error
async function searchAnime(query: string): Promise<AnimeInformation[] | Error> {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: searchAnimeQuery,
            variables: {'query': query}
        })
    };
    return fetch(anilistApiEntrypoint, options).then(handleResponse)
    .then(handleMultipleResults)
    .catch(handleError);
}

// Get a list of the current trending anime, returns a list of results as AnimeInformation objects or an error
async function getTrendingAnime(): Promise<AnimeInformation[] | Error>{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: getTrendingAnimeQuery,
            variables: {}
        })
    };
    return fetch(anilistApiEntrypoint, options).then(handleResponse)
    .then(handleMultipleResults)
    .catch(handleError);
}

// Get a specific anime by it's ID, returns an AnimeInformation object or an error
async function getAnimeByID(id: number): Promise<AnimeInformation | Error> {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: getAnimeByIDQuery,
            variables: {'id': id}
        })
    };
    return fetch(anilistApiEntrypoint, options).then(handleResponse)
    .then(handleResult)
    .catch(handleError);
}

// Get a specifc anime by it's title, returns an AnimeInformation object or an error
async function getAnimeByTitle(title: string): Promise<AnimeInformation | Error> {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query: getAnimeByTitleQuery,
            variables: {'query': title}
        })
    };
    return fetch(anilistApiEntrypoint, options).then(handleResponse)
    .then(handleResult)
    .catch(handleError);
}

function handleResponse(response: Response) {
    return response.json().then( (json)=> {
        if (response.ok) {return json;}
        return Promise.reject(json);
    });
}

// Didn't specify JSON as type cause then I wouldn't be able to access the attributes cause the typescript compiler doesn't seem to understand JSON object attributes are dynamic
function handleResult (json: any): AnimeInformation {
    const result = json['data']['Media'];
    return createAnimeInformationObject(result);
}

function handleMultipleResults(json: any): AnimeInformation[] {
    let animeInfoList: AnimeInformation[] = [];
    const results = json['data']['Page']['media'];
    for (const result of results){
        animeInfoList.push(createAnimeInformationObject(result));
    }
    return animeInfoList;
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

function createAnimeInformationObject (json: any): AnimeInformation {
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

 searchAnime('Bleach').then( (results) => { console.log(results) });
// getTrendingAnime().then( (results) => { console.log(results) });
// getAnimeByID(20).then( (result) => { console.log(result) }); // Naruto's ID is 20 on the anilist database
// getAnimeByTitle('jujutsu season').then( (result) => { console.log(result) });
