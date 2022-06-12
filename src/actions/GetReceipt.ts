const getReceipt = async () =>{

    let getRequest = await fetch('https://rauls-store.herokuapp.com/api/get/receipts')

    let data = await getRequest.json()

    return data
}

export default getReceipt