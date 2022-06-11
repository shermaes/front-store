import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getProducts from '../actions/GetProduct'
import { gettingProduct } from '../state/slice/ProductSlice'
import store from '../state/Store'
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

  return (
    <div>
        <h1>What you can get from Raul's Store</h1>
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
            </tr>
            
            )}
        </ul>
    </div>
    
  )
}

export default ProductList