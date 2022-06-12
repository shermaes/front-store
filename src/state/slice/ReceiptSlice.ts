import { createSlice } from "@reduxjs/toolkit"
import { providerType } from "./ProviderSlices"

type receiptType ={
    id:string,
    provider: providerType,
    id_product: string,
    date: string,
    quantity: number
}

const initialState = [
    {
    id:'56464o',
    provider: 'Angel',
    id_product: '364987uuj',
    date: '02/07/99',
    quantity: 5  
    }
]

const receiptSlice = createSlice({
    name:'receipt',
    initialState,
    reducers:{
        createReceipt(state, action){
            state.push(action.payload)
        },
        gettingReceipt(state, action){
            return action.payload
        }
        }
    })
 export default receiptSlice.reducer
 export const {createReceipt, gettingReceipt}=receiptSlice.actions
 export type {receiptType}
    