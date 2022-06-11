const getProducts = async () =>{

    let getRequest = await fetch(`http://localhost:8081/api/get/products`)

    let data = await getRequest.json()
 console.log(getRequest);
 console.log(data);
 
 
    return data
}

export default getProducts