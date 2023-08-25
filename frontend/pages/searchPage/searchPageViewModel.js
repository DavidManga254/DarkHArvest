import { searchAnime } from "../../../anilist-api/anilist-api";


export async function searchAnimeQuery(query,page){
    try {
        let response = await searchAnime(query,page,20);

        return response[0]

        return response;
    } catch (error) {
        console.log('error searching anime',error);
    }
}