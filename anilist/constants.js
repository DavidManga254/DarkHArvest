"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CURRENT_SEASON = exports.CURRENT_YEAR = exports.ANILIST_API_ENTRY_POINT = void 0;
exports.ANILIST_API_ENTRY_POINT = 'https://graphql.anilist.co';
const types_1 = require("./types");
const current_date = new Date();
exports.CURRENT_YEAR = current_date.getFullYear();
exports.CURRENT_SEASON = (0, types_1.getSeasonsList)()[Math.floor((current_date.getMonth() + 1) / 3) % 4];
