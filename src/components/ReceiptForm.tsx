import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getProvider from '../actions/GetProvider'
import postReceipt from '../actions/PostReceipt'
import { gettingProvider, providerType } from '../state/slice/ProviderSlices'
import store from '../state/Store'
import Select from 'react-select'
import getProducts from '../actions/GetProduct'
import { gettingProduct } from '../state/slice/ProductSlice'

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

const handleProvider= (e:any) =>{
  setProvider(e.label)
  setProvider(e.value)
  }

useEffect(()=>{
    getProvider().then(
        (provider)=>{
            dispatch(gettingProvider(provider))
        }
    )
    },[])
//and this part will handle the dropdown for the productID
const products = useSelector((state:store)=>state.product)
const handleProduct= (e:any) =>{
  setProductID(e.label)
  setProductID(e.value)
  }

  useEffect(()=>{
    getProducts().then(
        (product)=>{
            dispatch(gettingProduct(product))
        }
    )
    },[])

  return (
    <form className="form-inline">
    <div className="form-group row">
        <h2>Generating a new receipt</h2>

        <div className="col-sm-10">
    <label htmlFor="provider">Provider:</label>
    <Select  options={providers.map(provs => ({label:provs.name, value:provs.name}))} onChange={(ev)=>handleProvider(ev)}/>
    </div>
    <div className="col-sm-10">
    <label htmlFor="productID">Product Name:</label>
    <Select  options={products.map(prods => ({label:prods.name_product, value:prods.name_product}))} onChange={(ev)=>handleProduct(ev)}/> 
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