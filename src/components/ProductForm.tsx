import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getProvider from '../actions/GetProvider'
import postProduct from '../actions/PostProduct'
import  { gettingProvider, providerType} from '../state/slice/ProviderSlices'
import  store from '../state/Store'

const ProductForm = () => {

    const dispatch = useDispatch()
    const[provider, setProvider]=useState({} as providerType) 
    const[minimum, setMinimum]=useState<number>(0)
    const[maximum, setMaximum]=useState<number>(0)
    const[name_product, setName_product]=useState('')
    const[description, setDescription]=useState('')
    const[units_available, setUnits_available]=useState<number>(0)
    const[price, setPrice]=useState<number>(0)

const useForm =(e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        postProduct(provider, minimum, maximum, name_product, description, units_available, price, dispatch)
        setDescription("")
        setMaximum(0)
        setMinimum(0)
        setName_product("")
        setPrice(0)
        setUnits_available(0)
}

const providers = useSelector((state:store)=>state.provider)

const handleProvider= (e:React.SyntheticEvent<HTMLSelectElement, Event>) =>{
    const idk = providers.find(item=> item.name==e.currentTarget.value)
setProvider(idk as providerType)
}

useEffect(()=>{
    getProvider().then(
        (product)=>{
            dispatch(gettingProvider(product))
        }
    )
    },[])

  return (
    <form>
        <h2>Adding a new product</h2>
    <label htmlFor="name_product">Product name:</label>
    <input type="text" name="name_product"
    value={name_product} onChange={(e)=> setName_product(e.target.value)}/> 
    <br />
    <label htmlFor="description">Description:</label>
    <input type="text" name="desription"
    value={description} onChange={(e)=>setDescription(e.target.value)}/> 
    <br />
    <label htmlFor="provider">Provider:</label>
    <select
  id="disabledSelect" onSelect={(e)=>{ handleProvider}}>
    {providers.map((provider)=>(
    <option value={provider.name} key={provider.id}>{provider.name}</option>
  ))}
    </select>

    <br />
    <label htmlFor="maximum">Max units for this product:</label>
    <input type="number" name="maximum"
    value={maximum} onChange={(e)=> setMaximum(parseInt(e.target.value))}/> 
    <br />
    <label htmlFor="minimum">Min units for this product:</label>
    <input type="number" name="minimum"
    value={minimum} onChange={(e)=> setMinimum(parseInt(e.target.value))}/> 
    <br />
    <label htmlFor="price">Price:</label>
    <input type="number" name="price"
    value={price} onChange={(e)=> setPrice(parseInt(e.target.value))}/> 
    <br />
    <label htmlFor="units_available">Available units:</label>
    <input type="number" name="units_available"
    value={units_available} onChange={(e)=> setUnits_available(parseInt(e.target.value))}/> 
    <br />
    <button onClick={useForm}>Create Product</button>
</form>
  )
}

export default ProductForm


