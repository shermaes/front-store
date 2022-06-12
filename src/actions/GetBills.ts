const getBills = async () =>{

    let getRequest = await fetch(`https://rauls-store.herokuapp.com/api/get/bills`)

    let data = await getRequest.json()

    return data
}

export default getBills