import { createSlice } from "@reduxjs/toolkit";

type providerType ={
    id:String,
      name:String,
      passport:String,
      phone: String
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
        getProvider(state, action){
            state.push(action.payload)
        },
        deleteProvider(state, action){
            state.push(action.payload)
        },
        updateProvider(state, action){
            state.push(action.payload)    
        }

    }
})

export const {createProvider, getProvider, deleteProvider, updateProvider} = providerSlice.actions
export default providerSlice.reducer
export type {providerType}