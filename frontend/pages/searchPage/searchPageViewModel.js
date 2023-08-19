import { searchAnime } from "../../../anilist-api/anilist-api";


export async function searchAnimeQuery(query){
    try {
        let response = await searchAnime(query,1,);

        return response;
    } catch (error) {
        console.log('error searching anime',error);
    }
}