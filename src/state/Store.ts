import { configureStore } from "@reduxjs/toolkit";
import ProductReducer, { productType } from "./slice/ProductSlice";
import providerReducer, {providerType} from "./slice/ProviderSlices"



const store = configureStore(
    {
        reducer:{
        provider: providerReducer,
        product: ProductReducer
        }
    }
)

type store = {
    provider: providerType[]
    product: productType[]
}

export default store
export type {store}