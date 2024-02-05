export const ANILIST_API_ENTRY_POINT = 'https://graphql.anilist.co';
import { getSeasonsList } from "./types";

const current_date = new Date();
export const CURRENT_YEAR = current_date.getFullYear();
export const CURRENT_SEASON = getSeasonsList()[Math.floor((current_date.getMonth() + 1) / 3) % 4];