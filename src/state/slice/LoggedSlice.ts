import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user:"" ,
  }

  const loggedSlice = createSlice(
    {
      name: 'logged',
      initialState,
      reducers:{
        logInInReducer(state, action){
          const stateLogged = {...state, user: action.payload}
          return stateLogged
        },
        logOutInReducer(){
          return {user: ""}
        }
      }
    }
  )
  
  export default loggedSlice.reducer
  export const {logInInReducer, logOutInReducer}=loggedSlice.actions