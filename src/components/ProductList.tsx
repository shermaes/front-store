import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import deletingProduct from '../actions/DeleteProduct'
import getProducts from '../actions/GetProduct'
import { deleteProduct, gettingProduct } from '../state/slice/ProductSlice'
import  store from '../state/Store'
//here I create the list to show my products
const ProductList = () => {

    const dispatch = useDispatch()

    const productSavedInStore = useSelector((state:store) => state.product)

    useEffect(()=>{
        getProducts().then(
            (product)=>{
                dispatch(gettingProduct(product))
            }
        )
        },[])

const productBeingDeleted = async (id:string) => {
    const response = await deletingProduct(id)
    if(response.productGone){
        dispatch(deleteProduct(id))
    }
}


  return (
    <div>
        <h2>What you can get from Raul's Store</h2>
        <ul>
            {productSavedInStore.map((product)=>
            <tr key={product.id}>
            <td>{product.name_product}</td>
            <td>{product.description}</td>
            <td>{product.provider.name}</td>
            <td>{product.units_available}</td>
            <td>{product.price}</td>
            <td>{product.maximum}</td>
            <td>{product.minimum}</td>
            <button onClick={()=>{productBeingDeleted(`${product.id}`)}}>X</button>
            </tr>
            
            )}
        </ul>
    </div>
    
  )
}

export default ProductList