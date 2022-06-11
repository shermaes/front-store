import { createSlice } from "@reduxjs/toolkit";

type providerType ={
    id:string,
      name:string,
      passport:string,
      phone: string
}

const initialState = [
    {
      id:'1a',
      name:'Marcos Nino',
      passport:'AJVUY54J',
      phone:  '23514'
    }
]

const providerSlice = createSlice({
    name: 'provider',
    initialState,
    reducers: {
        createProvider(state, action){
            state.push(action.payload)
        },
        gettingProvider(state, action){
            return action.payload
        },
        deleteProvider(state, action){
            //here I create a new state and filter the id deleted, the id I erased is the action payload
        let newState = state.filter((provider) => provider.id != action.payload)
        // I return this to update the store
      return newState
        }

    }
})

export const {createProvider, gettingProvider, deleteProvider} = providerSlice.actions
export default providerSlice.reducer
export type {providerType}