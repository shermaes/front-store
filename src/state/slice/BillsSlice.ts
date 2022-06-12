import { createSlice } from "@reduxjs/toolkit"

type billType={
    id:string,
    date: string,
    client_name:string,
    clerk: string,
    productSold: string,
    quantity: number,
    totalPaid: number  
  }

  const initialState = [
    {
      id:'string',
      date: 'string',
      client_name:'string',
      clerk: 'string',
      productSold: 'string',
      quantity:0,
      totalPaid: 0  
    }
  ]

  const billSlice = createSlice({
    name:'bill',
    initialState,
    reducers:{
        createBill(state, action){
            state.push(action.payload)
        },
        gettingBills(state, action){
            return action.payload
        }
        }
    })
    export default billSlice.reducer
    export const {createBill, gettingBills}=billSlice.actions
    export type {billType}