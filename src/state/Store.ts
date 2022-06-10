import { configureStore } from "@reduxjs/toolkit";
import providerReducer, {providerType} from "./slice/ProviderSlice"


const store = configureStore(
    {
        reducer:{
        provider: providerReducer,
        }
    }
)

type store = {
    provider: providerType[]
}

export default store
export type {store}