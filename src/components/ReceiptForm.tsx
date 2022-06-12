import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getProducts from '../actions/GetProduct'
import getProvider from '../actions/GetProvider'
import postReceipt from '../actions/PostReceipt'
import { gettingProduct, productType } from '../state/slice/ProductSlice'
import { gettingProvider, providerType } from '../state/slice/ProviderSlices'
import store from '../state/Store'

const ReceiptForm = () => {

    const dispatch = useDispatch()
    const[provider, setProvider]=useState({} as providerType) 
    const[quantity, setQuantity]=useState<number>(0)
    const[id_product, setProductID]=useState('')
    const[date, setDate]=useState('')


    const useForm =(e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        postReceipt(provider, id_product, date, quantity, dispatch)
        setQuantity(0)
        setDate("")
        setProductID("")
}
//this part here is the logic for my dropdown when choosing a provider
const providers = useSelector((state:store)=>state.provider)
const handleProvider= (e:React.SyntheticEvent<HTMLSelectElement, Event>) =>{
    const idk = providers.find(item=> item.name==e.currentTarget.value)
setProvider(idk as providerType)
}
useEffect(()=>{
    getProvider().then(
        (provider)=>{
            dispatch(gettingProvider(provider))
        }
    )
    },[])


  return (
    <form className="form-inline">
    <div className="form-group row">
        <h2>Generating a new receipt</h2>

        <div className="col-sm-10">
    <label htmlFor="provider">Provider:</label>
    <select
  id="disabledSelect" onSelect={(e)=>{ handleProvider}} className="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split" >
    {providers.map((provider)=>(
    <option value={provider.name} key={provider.id}>{provider.name}</option>
  ))}
    </select>
    </div>
    <div className="col-sm-10">
    <label htmlFor="productID">Product ID:</label>
    <input type="text" name="productID"
    value={id_product} onChange={(e)=> setProductID(e.target.value)} className="form-control" placeholder="EX: 1A"/> 
    </div>

    <div className="col-sm-10">
    <label htmlFor="quantity">Quantity:</label>
    <input type="number" name="quantity"
    value={quantity} onChange={(e)=> setQuantity(parseInt(e.target.value))} className="form-control"/> 
    </div>
    <div className="col-sm-10">

    <label htmlFor="date">Date:</label>
    <input type="text" name="date"
    value={date} onChange={(e)=> setDate(e.target.value)} className="form-control" placeholder="EX: 02/07/99"/> 
    </div>
    <br />
    <button onClick={useForm}  className="btn btn-outline-success">Create Receipt</button>
    </div>
    
    </form>
  )
}

export default ReceiptForm