import { createSlice } from "@reduxjs/toolkit";
import { providerType } from "./ProviderSlices";

type productType={
    id:string,
    provider: providerType,
    minimum: number,
    maximum: number;
    name_product: string,
    description:string,
    units_available: number,
    price: number  
  }

  const initialState = [
    {
        id:'56464o',
        provider: 'Angel',
        minimum: 5,
        maximum: 10,
        name_product: 'screw',
        description:'kjqgiwbdqbdop',
        units_available: 2,
        price: 1.3  
    }
]
  
  const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{
        createProduct(state, action){
            state.push(action.payload)
        },
        gettingProduct(state, action){
            return action.payload
        },
        deleteProduct(state, action){
            //here I create a new state and filter the id deleted, the id I erased is the action payload
        let newState = state.filter((product) => product.id != action.payload)
        // I return this to update the store
      return newState
        }
    }

})
export default productSlice.reducer
export const {createProduct,gettingProduct, deleteProduct}= productSlice.actions
export type {productType}