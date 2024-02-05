
export enum SEASON {
  WINTER = "WINTER",
  SPRING = "SPRING",
  SUMMER = "SUMMER",
  FALL = "FALL"
}
export function getSeasonsList(): SEASON[] {
  return [SEASON.WINTER, SEASON.SPRING, SEASON.SUMMER, SEASON.FALL];
}

export enum GENRE {
  ACTION = "Action",
  ADVENTURE = "Adventure",
  COMEDY = "Comedy",
  DRAMA = "Drama",
  ECCHI = "Ecchi",
  FANTASY = "Fantasy",
  HENTAI = "Hentai",
  HORROR = "Horror",
  MAHOU = "Mahou",
  MECHA = "Mecha",
  MUSIC = "Music",
  MYSTERY = "Mystery",
  PSYCHOLOGICAL = "Psychological",
  ROMANCE = "Romance",
  SCI_FI = "Sci-Fi",
  SLICE_OF_LIFE = "Slice of Life",
  SPORTS = "Sports",
  SUPERNATURAL = "Supernatural",
  THRILLER = "Thriller"
}

/**
 * Contains information about an, sourced from Anilist.
 * Almost all of these attributes can be null for cases where it isn't contained in their database.
 */
export interface AnimeInformation {
  /**
   * Anime ID as it's in the Anilist database.
   */
  id: number | null;

  /**
   * Anime title in English and Japanese (Romaji).
   */
  title: {
    /**
     * Anime title in English. e.g., Attack on Titan.
     */
    english: string | null;
    /**
     * Anime title in Japanese. e.g., Shingeki No Kyojin.
     */
    romaji: string | null;
  } | null;

  /**
   * Direct URL to the cover image.
   */
  coverImage: string | null;

  /**
   * Date the anime started airing, in the format D-M-Y.
   */
  startDate: string | null;

  /**
   * Date the anime ended airing, in the format D-M-Y.
   */
  endDate: string | null;

  /**
   * Main studio that made the anime.
   */
  studio: string | null;

  /**
   * Information about the next airing episode.
   */
  nextAiringEpisode: {
    /**
     * Time when the episode will air in Unix Epoch.
     */
    airingOn: number | null;
    /**
     * The number of the episode that is to air.
     */
    episode: number | null;
  } | null;

  /**
   * Ranking information of the anime based on popularity and rating.
   */
  rank: {
    /**
     * Rank of the anime based on popularity.
     */
    popularity: number | null;
    /**
     * Rank of the anime based on rating.
     */
    rating: number | null;
    /**
     * Year the ranking was made. When the year is zero, it means the rank is of ALL TIME.
     */
    year: number | null;
  } | null;

  /**
   * Direct URL to the anime's trailer, sourced from YouTube or Dailymotion.
   */
  trailer: string | null;

  /**
   * Direct URL to the anime's banner image.
   */
  bannerImage: string | null;

  /**
   * Airing status of the anime, e.g., FINISHED, RELEASING.
   */
  status: string | null;

  /**
   * Total number of episodes the anime has.
   */
  episodes: number | null;

  /**
   * Season the anime aired in.
   */
  season: string | null;

  /**
   * Brief summary of the anime.
   */
  description: string | null;

  /**
   * Mean score rating of the anime.
   */
  meanScore: number | null;

  /**
   * List of genres the anime is in.
   */
  genres: string[] | null;
}

/**
 * Json response for a single result
 */
export interface JsonSingleResponse {
  data: {
    Media: Media;
  };
}

/**
 * Json response for paged results
 */
export interface JsonPageResponse {
  data: {
    Page: Page;
  }
}

/**
 * Paged anime information json response e.g., for search results
 */
export interface Page {
  pageInfo: {
    hasNextPage: boolean
  };
  media: Media[];
}

/**
 * Raw anime information json response
 */
export interface Media {
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