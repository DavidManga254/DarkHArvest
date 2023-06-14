const anilistApiEndpoint = 'https://graphql.anilist.co';

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

// Contains details and information of an anime sourced from anilist
// Almost all of these attributes can be NULL/undefined for cases where the detail isn't contained in their database
// For both string and number attributes the number state is null AND '', for int it's null AND 0
class AnimeInformation {
    id: number ;// Anime ID as it's in the anilist database
    title: {
      english: string; // Anime title in English e.g Attack on Titan
      romaji: string; // Anime title in Japanese e.g Shingeki No Kyojin
    };
    coverImage: string; // Direct url to the cover image
    startDate: string; // The date the anime started airing
    endDate: string; // The date the anime ended airing
    studio: string ;// Main studio that made the anime
    nextAiringEpisode: {
      airingOn: string; // Date when the next episode will air
      timeUntilAiring: string; // Time remaining before next episode airs
      episode: number; // The number of the episode that is to air
    };
    popularityRank: number;// Rank of the anime based off popularity
    ratingRank: number;// Rank of the anime based off rating
    trailer: string;// Direct url to the anime's trailer, souces youtube/dailymotion, on of either
    bannerImage: string;// Direct link to the anime's banner image
    status: string; // Airing status, e.g FINISHED, AIRING   
    episodes: number; // Total number of episodes
    season: string; // Season the anime aired in 
    description: string; // Brief summary/synopsis of the anime
    meanScore: number; // Mean score rating of the anime
    genres: string[]; // List of genres the anime is in
  
    constructor(
      id: number,
      title: {
        english: string;
        romaji: string;
      },
      coverImage: string,
      startDate: string,
      endDate: string,
      studio: string,
      nextAiringEpisode: {
        airingOn: string;
        timeUntilAiring: string;
        episode: number;
      },
      popularityRank: number,
      ratingRank: number,
      trailer: string,
      bannerImage: string,
      status: string,
      episodes: number,
      season: string,
      description: string,
      meanScore: number,
      genres: string[]
    ) {
      this.id = id;
      this.title = title;
      this.coverImage = coverImage;
      this.bannerImage = bannerImage;
      this.startDate = startDate;
      this.endDate = endDate;
      this.studio = studio;
      this.nextAiringEpisode = nextAiringEpisode;
      this.popularityRank = popularityRank;
      this.ratingRank = ratingRank;
      this.trailer = trailer;
      this.status = status;
      this.episodes = episodes;
      this.season = season;
      this.description = description;
      this.meanScore = meanScore;
      this.genres = genres;
    }
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
    return fetch(anilistApiEndpoint, options).then(handleResponse)
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
    return fetch(anilistApiEndpoint, options).then(handleResponse)
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
    return fetch(anilistApiEndpoint, options).then(handleResponse)
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
    return fetch(anilistApiEndpoint, options).then(handleResponse)
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
  

function createAnimeInformationObject (json: any): AnimeInformation {
    let title = json['title'];
    const id = json['id'];
    const coverImage = json['coverImage']['large'];
    const bannerImage = json['bannerImage'];
    const status = json['status'];
    const episodes = json['episodes'];
    const season = json['season'];
    const description = json['description'];
    const meanScore = json['meanScore'];
    const genres = json['genres'];
    
    // These will be preprocessed first i.e dynamically converted into a more acceptable format e.g converting epoch time to normal time
    let trailer: string = '';
    let startDate: string = '';
    let endDate: string = '';
    let nxtAirEps = {airingOn: '', timeUntilAiring: '', episode: 0};
    let studio: string = ''; // Included cause some studios are unknown
    let popularityRank: number = 0;  // Included cause some rankings may be unknowm
    let ratingRank: number = 0; // Included cause some rankings may be unknowm


    const rankObject = json['rankings'];
    if (rankObject.length >= 2) {
        popularityRank = rankObject[0]['rank'];
        ratingRank = rankObject[1]['rank'];
    }
    
    const stdObject = json['studios']['nodes'];
    if (stdObject.length > 0) { studio = stdObject[0]['name'];}

    const sDObject = json['startDate'];
    if (sDObject['day']) { startDate = `${sDObject['day']}-${sDObject['month']}-${sDObject['year']}`;}

    const eDObj = json['endDate'];
    if (eDObj['day']) { endDate = `${eDObj['day']}-${eDObj['month']}-${eDObj['year']}`;}

    const nxtAirEpsObj = json['nextAiringEpisode'];
    if (nxtAirEpsObj) {     // Date and time in format H:M:S D-M-Y
        nxtAirEps.airingOn = convertUnixEpochToNormalDateTime(nxtAirEpsObj['airingAt']);
        nxtAirEps.timeUntilAiring = ( (timeUntilAir: number) => {
            if (timeUntilAir) {
                // If the time until air is more than or equal to a full day then format the string as a day and so on.. .
                if (timeUntilAir >= 86400) { return `${(timeUntilAir / 86400)} days`;}
                else if (timeUntilAir >= 3600) { return `${(timeUntilAir / 3600)} hours`;}
                else if (timeUntilAir >= 60) { return `${(timeUntilAir / 60)} minutes`;}
                else { return `${timeUntilAir} seconds`;}
            }
            else { 
                return ''};
        })(nxtAirEpsObj['timeUntilAir']);
        nxtAirEps.episode = nxtAirEpsObj['episode'];
    }

    const trailerObj = json['trailer'];
    if ( trailerObj ) {
        if (trailerObj['site'] == 'youtube') { trailer = `https://youtube.com/watch?v=${trailerObj['id']}`;}
        else if (trailerObj['site'] == 'dailymotion') { trailer = `https:/dailymotion.com/video/${trailerObj['id']}`;}
    }
    return new AnimeInformation(id, title, coverImage, startDate, endDate, studio, nxtAirEps, popularityRank, ratingRank, trailer, bannerImage, status, episodes, season, description, meanScore, genres);

}

// TESTS (PASSED TESTS) 🐐

// searchAnime('Naruto').then( (results) => { console.log(results) });
// getTrendingAnime().then( (results) => { console.log(results) });
// getAnimeByID(20).then( (result) => { console.log(result) }); // Naruto's ID is 20 on the anilist database
// getAnimeByTitle('Naruto').then( (result) => { console.log(result) });
