import * as React from 'react';
//here I handle the DELETE method

//I need to create a header containing the content type 
//because I will need it when deleting teh provider
const header = {
    accept:'application/json',
    'content-type':'application/json'
}

//Here's where I enter the route to work with my data base
const deletingProvider = async (id: string)=> {
    const response  = await fetch(`http://localhost:8081/api/delete/provider/${id}`, {
        method: 'DELETE'
        
    })
    return {providerGone: response.ok, id: id }

}
//exporting this action
export default deletingProvider