
//here I handle the DELETE method

//Here's where I enter the route to work with my data base
const deletingProvider = async (id: string)=> {
    const response  = await fetch(`https://rauls-store.herokuapp.com/api/delete/provider/${id}`, {
        method: 'DELETE'
        
    })
    return {providerGone: response.ok, id: id }

}
//exporting this action
export default deletingProvider