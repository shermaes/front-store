const getProducts = async () =>{

    let getRequest = await fetch(`https://rauls-store.herokuapp.com/api/get/products`)

    let data = await getRequest.json()
 console.log(getRequest);
 console.log(data);
 
 
    return data
}

export default getProducts