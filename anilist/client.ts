
import { ANILIST_API_ENTRY_POINT } from "./constants";
import { AnimeInformation, JsonPageResponse, JsonSingleResponse, Media } from "./types";

function createOptions(query: string, variables: object) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  };
}


async function apiRequest(query: string, variables: object): Promise<Response> {
  const options = createOptions(query, variables);
  return fetch(ANILIST_API_ENTRY_POINT, options);
}

export async function apiPageRequest(query: string, variables: object): Promise<[AnimeInformation[], boolean]> {
  return apiRequest(query, variables).then(handlePageResponse).then(handlePageResult);
}


export async function apiSingleRequest(query: string, variables: object): Promise<AnimeInformation> {
  return apiRequest(query, variables).then(handleSingleResponse).then(handleResult);
}


async function handleSingleResponse(response: Response): Promise<JsonSingleResponse> {
  return response.json().then((json) => {
    if (response.ok) { return json; }
    return Promise.reject(json)
  });
}


async function handlePageResponse(response: Response): Promise<JsonPageResponse> {
  return response.json().then((json) => {
    if (response.ok) { return json; }
    return Promise.reject(json)
  })
}


function handleResult(json: JsonSingleResponse): AnimeInformation {
  return parseAnimeInformation(json.data.Media);
}


function handlePageResult(json: JsonPageResponse): [AnimeInformation[], boolean] {
  const page = json.data.Page;
  const animeInfoList = page.media.map((media) => parseAnimeInformation(media));
  return [animeInfoList, page.pageInfo.hasNextPage];
}


function parseAnimeInformation(json: Media): AnimeInformation {
  const title = { english: json.title?.english, romaji: json.title?.romaji };
  const id = json.id ? parseInt(json.id) : null;
  const coverImage = json.coverImage?.large;
  const bannerImage = json.bannerImage;
  const status = json.status;
  const episodes = json.episodes;
  const season = json.season;
  const description = json.description;
  const meanScore = json.meanScore;
  const genres = json.genres;
  const studio = json.studios?.nodes[0]?.name;
  const rankings = json.rankings && json.rankings.length >= 2 ? json.rankings.slice(0, 2) : null;
  const rank = rankings ? { popularity: rankings[0].rank, rating: rankings[1].rank, year: rankings[0].year } : null;
  const trailer = json.trailer ? json.trailer.site == 'youtube' ? `https://youtube.com/watch?v=${json.trailer.id}` : `https:/dailymotion.com/video/${json.trailer.id}` : null;
  const rawStartDate = json.startDate;
  const startDate = rawStartDate.day && rawStartDate.month && rawStartDate.year ? `${rawStartDate.day}-${rawStartDate.month}-${rawStartDate.year}` : null;
  const rawEndDate = json.endDate;
  const endDate = rawEndDate.day && rawEndDate.month && rawEndDate.year ? `${rawEndDate.day}-${rawEndDate.month}-${rawEndDate.year}` : null;
  const rawNextAiringEpisode = json.nextAiringEpisode;
  const nextAiringEpisode = rawNextAiringEpisode ? { airingOn: rawNextAiringEpisode.airingAt, episode: rawNextAiringEpisode.episode } : null;
  return {
    id, title, coverImage, startDate, endDate, studio, nextAiringEpisode, rank, trailer, bannerImage, status, episodes, season, description, meanScore, genres
  }
}