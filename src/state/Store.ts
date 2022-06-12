import { configureStore } from "@reduxjs/toolkit";
import ProductReducer, { productType } from "./slice/ProductSlice";
import providerReducer, {providerType} from "./slice/ProviderSlices"
import ReceiptReducer, { receiptType } from "./slice/ReceiptSlice";



const store = configureStore(
    {
        reducer:{
        provider: providerReducer,
        product: ProductReducer,
        receipt:ReceiptReducer
        }
    }
)

type store = {
    provider: providerType[]
    product: productType[]
    receipt: receiptType[]
}

export default store
export type {store}