const getProvider = async () =>{

    let getRequest = await fetch('https://rauls-store.herokuapp.com/api/get/providers')

    let data = await getRequest.json()

    return data
}

export default getProvider