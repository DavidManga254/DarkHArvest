import { getGenreCollection } from "../../../anilist-api/anilist-api";
import { getAnimeByGenre } from "../../../anilist-api/anilist-api";

export async function getAnimeCategories(){
    try {
        let response = await getGenreCollection();

        return response;

    } catch (error) {
        console.log('Error fetching trending animme', error);
    }
}

export async function getAnimeGenre(genre){
    try {
        let summer = await getAnimeByGenre(genre,'SUMMER',new Date().getFullYear.toString(),1,100)
         let winter = await getAnimeByGenre(genre,'WINTER',new Date().getFullYear.toString(),1,5)
        // let fall = await getAnimeByGenre(genre,'FALL',new Date().getFullYear.toString(),1,50)
        // let spring = await getAnimeByGenre(genre,'SPRING',new Date().getFullYear.toString(),1,50)

        return winter[0];
        // return summer[0].concat(winter[0],fall[0],spring[0])
    } catch (error) {;
        
    }
}