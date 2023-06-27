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
        default:
            return initialState;
    }
    
}