const deletingProduct = async(id:string) => {
    const response  = await fetch(`http://localhost:8081/api/delete/product/${id}`, {
        method: 'DELETE'
        
    })
    return {productGone: response.ok, id: id }

}

export default deletingProduct