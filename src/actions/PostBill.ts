import { createBill } from "../state/slice/BillsSlice"

const postBill = async (date: string,
    client_name:string,
    quantity: number,
    clerk: string,
    productsSold: string,
    total_paid: number,dispatch:any)=>{

    const postBody={
    date: date,
    client_name:client_name,
    quantity: quantity,
    clerk: clerk,
    productSold: productsSold,
    totalPaid: total_paid
    }
    
    let postRequest = await fetch('https://rauls-store.herokuapp.com/api/create/bill',
    {
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(postBody)
    })
    
    let response = await postRequest.json()
    dispatch(createBill(response))
    }
    export default postBill