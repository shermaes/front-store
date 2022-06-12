import { createSlice } from "@reduxjs/toolkit"

type saleType={
    id:string,
    product_name: string,
    price: number,
    quantity: number 
  }

  const initialState = [
    {
    id:'56464o',
    product_name: 'screw',
    price: 1.4,
    quantity: 2 
    }
]

const saleSlice = createSlice({
    name:'sale',
    initialState,
    reducers:{
        addingProductsToSale(state, action){
            state.push(action.payload)
        }
    }

})

export default saleSlice.reducer
export const {addingProductsToSale}=saleSlice.actions
export type {saleType}