import { productType } from "../state/slice/ProductSlice"
import { providerType } from "../state/slice/ProviderSlices"
import { createReceipt } from "../state/slice/ReceiptSlice"

const postReceipt = async (provider: providerType, id_product: string, date: string, quantity: number, dispatch:any )=>{

    const postBody={
        provider: provider,
        id_product: id_product,
        date: date,
        quantity: quantity 
    }
    
    let postRequest = await fetch('https://rauls-store.herokuapp.com/api/create/receipt',
    {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(postBody)
    })
    
    let response = await postRequest.json()
    dispatch(createReceipt(response))
    }
    export default postReceipt