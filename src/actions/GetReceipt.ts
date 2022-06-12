const getReceipt = async () =>{

    let getRequest = await fetch('http://localhost:8081/api/get/receipts')

    let data = await getRequest.json()

    return data
}

export default getReceipt