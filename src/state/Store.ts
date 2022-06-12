import { configureStore } from "@reduxjs/toolkit";
import LoggedReducer from "./slice/LoggedSlice";
import ProductReducer, { productType } from "./slice/ProductSlice";
import providerReducer, {providerType} from "./slice/ProviderSlices"
import ReceiptReducer, { receiptType } from "./slice/ReceiptSlice";
import SaleReducer from "./slice/SaleSlice";



const store = configureStore(
    {
        reducer:{
        provider: providerReducer,
        product: ProductReducer,
        receipt:ReceiptReducer,
        logged: LoggedReducer,
        sale: SaleReducer
        }
    }
)

type store = {
    provider: providerType[]
    product: productType[]
    receipt: receiptType[]
}

type stateType = ReturnType<typeof store.getState>

export default store
export type {store}
export type {stateType}
