const getBills = async () =>{

    let getRequest = await fetch('http://localhost:8081/api/get/bills')

    let data = await getRequest.json()

    return data
}

export default getBills