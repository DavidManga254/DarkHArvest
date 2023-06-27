import { configureStore } from "@reduxjs/toolkit";
import { ChangeStoreData } from "./reducers";


export const Store = configureStore({
    reducer:{
        ChangeStoreData: ChangeStoreData
    }
})