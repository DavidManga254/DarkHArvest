import { initialState } from "./initial"

export function ChangeStoreData(state=initialState,action){
    switch(action.type){
        case 'changeRecommendedData':
            return {
                ...initialState,
                recommendedPage : action.payload
            }
        case 'changeHomeoverData':
            return {
                ...initialState,
                homePageCover : action.payload
            }
        case 'changeCategories':
            return{
                ...initialState,
                categories : action.payload
            }
        case 'changeGenreList':
            return{
                ...initialState,
                genre : action.payload
            }
        case 'changeSearchResults':
            return{
                ...initialState,
                searchResults : action.payload
            }
        case 'changeCurrentDownloadAnime':
            return{
                ...initialState,
                currentDownloadAnime : action.payload
            }
        default:
            return initialState;
    }
    
}