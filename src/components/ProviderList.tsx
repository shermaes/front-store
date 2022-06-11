import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import deletingProvider from '../actions/DeleteProvider'
import getProvider from '../actions/GetProvider'
import { deleteProvider, gettingProvider, providerType } from '../state/slice/ProviderSlice'
import store from '../state/Store'

const ProviderList = () => {

const dispatch = useDispatch()

const providerSavedInStore = useSelector((state:store) => state.provider)

useEffect(()=>{
getProvider().then(
    (provider)=>{
        dispatch(gettingProvider(provider))
    }
)
},[])

//creating arrow function to handle the deletion of the provider with the id as a parameter
const providerBeingDeleted =async (id:string) => {
    //deletingProvider comes from DeleteProvider.ts which is my action
    const response = await deletingProvider (id)
    if(response.providerGone){
        // deleteProvider comes from my ProviderSlice thats where I handle my state
        dispatch(deleteProvider(id))
    }
}

  return (
    <div>
        <h2>Raul's providers</h2>
        <ul>
            {providerSavedInStore.map((provider:providerType)=>
            <li key={provider.id}>{provider.name}
            <button onClick={()=>{providerBeingDeleted(`${provider.id}`)}}>X</button>
            </li>)}
        </ul>
        </div>
  )
}
{}


export default ProviderList