const getProvider = async () =>{

    let getRequest = await fetch('http://localhost:8081/api/get/providers')

    let data = await getRequest.json()

    return data
}

export default getProvider