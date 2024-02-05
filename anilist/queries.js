"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ANIME_BY_SEASON_AND_YEAR = exports.GET_ANIME_BY_GENRE = exports.GET_TRENDING_ANIME = exports.SEARCH_ANIME = exports.GET_ANIME_BY_TITLE = exports.GET_ANIME_BY_ID = void 0;
exports.GET_ANIME_BY_ID = `
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
exports.GET_ANIME_BY_TITLE = `
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
exports.SEARCH_ANIME = `
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
exports.GET_TRENDING_ANIME = `
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
exports.GET_ANIME_BY_GENRE = `
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
exports.GET_ANIME_BY_SEASON_AND_YEAR = `
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
