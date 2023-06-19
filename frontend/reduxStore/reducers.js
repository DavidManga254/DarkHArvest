import { initialState } from "./initial"

export function ChangeStoreData(state=initialState,action){
    switch(action.type){
        case 'changeRecommendedData':
            return {
                ...initialState,
                recommendedPage : action.payload
            }
        default:
            return initialState;
    }
    
}