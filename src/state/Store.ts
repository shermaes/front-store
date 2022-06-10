import { configureStore } from "@reduxjs/toolkit";
import providerReducer from "./slice/ProviderSlice"

const store = configureStore(
    {
        reducer:{
        provider: providerReducer,
        }
    }
)

export default store