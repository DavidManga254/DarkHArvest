"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiSingleRequest = exports.apiPageRequest = void 0;
const constants_1 = require("./constants");
function createOptions(query, variables) {
    return {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({ query, variables }),
    };
}
function apiRequest(query, variables) {
    return __awaiter(this, void 0, void 0, function* () {
        const options = createOptions(query, variables);
        return fetch(constants_1.ANILIST_API_ENTRY_POINT, options);
    });
}
function apiPageRequest(query, variables) {
    return __awaiter(this, void 0, void 0, function* () {
        return apiRequest(query, variables).then(handlePageResponse).then(handlePageResult);
    });
}
exports.apiPageRequest = apiPageRequest;
function apiSingleRequest(query, variables) {
    return __awaiter(this, void 0, void 0, function* () {
        return apiRequest(query, variables).then(handleSingleResponse).then(handleResult);
    });
}
exports.apiSingleRequest = apiSingleRequest;
function handleSingleResponse(response) {
    return __awaiter(this, void 0, void 0, function* () {
        return response.json().then((json) => {
            if (response.ok) {
                return json;
            }
            return Promise.reject(json);
        });
    });
}
function handlePageResponse(response) {
    return __awaiter(this, void 0, void 0, function* () {
        return response.json().then((json) => {
            if (response.ok) {
                return json;
            }
            return Promise.reject(json);
        });
    });
}
function handleResult(json) {
    return parseAnimeInformation(json.data.Media);
}
function handlePageResult(json) {
    const page = json.data.Page;
    const animeInfoList = page.media.map((media) => parseAnimeInformation(media));
    return [animeInfoList, page.pageInfo.hasNextPage];
}
function parseAnimeInformation(json) {
    var _a, _b, _c, _d, _e;
    const title = { english: (_a = json.title) === null || _a === void 0 ? void 0 : _a.english, romaji: (_b = json.title) === null || _b === void 0 ? void 0 : _b.romaji };
    const id = json.id ? parseInt(json.id) : null;
    const coverImage = (_c = json.coverImage) === null || _c === void 0 ? void 0 : _c.large;
    const bannerImage = json.bannerImage;
    const status = json.status;
    const episodes = json.episodes;
    const season = json.season;
    const description = json.description;
    const meanScore = json.meanScore;
    const genres = json.genres;
    const studio = (_e = (_d = json.studios) === null || _d === void 0 ? void 0 : _d.nodes[0]) === null || _e === void 0 ? void 0 : _e.name;
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
    };
}
