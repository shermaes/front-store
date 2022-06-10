import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getProvider from '../actions/GetProvider'
import { gettingProvider, providerType } from '../state/slice/ProviderSlice'
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

  return (
    <div>
        <h2>Raul's providers</h2>
        <ul>
            {providerSavedInStore.map((provider:providerType)=>
            <li key={provider.id}>{provider.name}</li>)}
        </ul>
        </div>
  )
}

export default ProviderList