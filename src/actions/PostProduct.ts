import { createProduct } from "../state/slice/ProductSlice"
import { providerType } from "../state/slice/ProviderSlices"

const postProduct = async (provider: providerType, minimum: number, maximum: number, name_product: string, description:string, units_available: number, price: number, dispatch:any )=>{

const postBody={
    provider: provider,
    minimum: minimum,
    maximum: maximum,
    name_product: name_product,
    description:description,
    units_available: units_available,
    price: price  
}

let postRequest = await fetch('http://localhost:8081/api/create/product',
{
    method: 'POST',
    headers: {'content-type':'application/json'},
    body: JSON.stringify(postBody)
})

let response = await postRequest.json()
dispatch(createProduct(response))
}
export default postProduct

