import {createProvider} from "../state/slice/ProviderSlices"

const postProvider = async (providerName:string, phone:string, passport:string, dispatch:any)=>{

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