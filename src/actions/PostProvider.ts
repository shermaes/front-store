import {createProvider} from "../state/slice/ProviderSlice"

const postProvider = async (providerName:String, phone:String, passport:String, dispatch:any)=>{

const postBody ={
    name: providerName,
    passport: passport,
    phone: phone
}

let postRequest = await fetch('http://localhost:8081/api/create/provider',
{
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify(postBody)
})

let response = await postRequest.json()
dispatch(createProvider(response))
}

export default postProvider