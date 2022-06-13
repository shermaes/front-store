import { createSlice } from "@reduxjs/toolkit"

type billType={
    id:string,
    date: string,
    client_name:string,
    quantity: number,
    clerk: string,
    productsSold: string,
    total_paid: number  
  }

  const initialState = [
    {
      id:'string',
      date: 'string',
      client_name:'string',
      quantity:0,
      clerk: 'string',
      productsSold: 'string',
      total_paid: 0  
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