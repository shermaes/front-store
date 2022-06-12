const deletingProduct = async(id:string) => {
    const response  = await fetch(`https://rauls-store.herokuapp.com/api/delete/product/${id}`, {
        method: 'DELETE'
        
    })
    return {productGone: response.ok, id: id }

}

export default deletingProduct