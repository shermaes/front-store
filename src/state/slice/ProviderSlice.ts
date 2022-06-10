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
            state.push(action.payload)
        },
        updateProvider(state, action){
            state.push(action.payload)    
        }

    }
})

export const {createProvider, gettingProvider, deleteProvider, updateProvider} = providerSlice.actions
export default providerSlice.reducer
export type {providerType}