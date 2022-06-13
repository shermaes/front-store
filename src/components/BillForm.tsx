import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getBills from '../actions/GetBills'
import postBill from '../actions/PostBill'
import { gettingBills } from '../state/slice/BillsSlice'
import store from '../state/Store'
import Select from 'react-select'

const BillForm = () => {

    const dispatch = useDispatch()
    const[date, setDate]=useState('')
    const[client_name, setClientName]=useState('')
    const[clerk, setClerk]=useState('')
    const[productsSold, setProductSold]=useState('')
    const[quantity, setQuantity]=useState<number>(0)
    const[total_paid, setTotal]=useState<number>(0)

    const useForm =(e:React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        postBill(date,
            client_name,
            quantity,
            clerk,
            productsSold,
            total_paid,dispatch)
        setQuantity(0)
        setDate("")
        setClientName("")
        setClerk("")
        setProductSold("")
        setTotal(0)
        console.log(productsSold);
        console.log(quantity);
        console.log(total_paid);
        

        
}

//and this part will handle the dropdown for the productID
const products = useSelector((state:store)=>state.product)

const handleProduct= (e:any) =>{
  setProductSold(e.label)
  setTotal((e.value))
  
  }

  useEffect(()=>{
    getBills().then(
        (product)=>{
            dispatch(gettingBills(product))
        }
    )
    },[])
    
  return (
    <div>

        <form className="form-inline">
        <div className="form-group row">

        <h2>Generating a new bill</h2>

        <div className="col-sm-10">
        <label htmlFor="date">Date:</label>
    <input type="text" name="date"
    value={date} onChange={(e)=> setDate(e.target.value)} className="form-control" placeholder="EX: 02/07/99"/> 
        </div>

        <div className="form-group row">
        <label htmlFor="client_name">Client:</label>
        <input type="text" name="client_name"
    value={client_name} onChange={(e)=> setClientName(e.target.value)} className="form-control" placeholder="EX: Jose Maestre"/> 
        </div>

        <div className="form-group row">
        <label htmlFor="clerk">Clerk:</label>
        <input type="text" name="clerk"
    value={clerk} onChange={(e)=> setClerk(e.target.value)} className="form-control" placeholder="EX: Marcos Nino"/> 
        </div>

        <div className="form-group row">
        <label htmlFor="productsSold">Product sold:</label>
    <Select  options={products.map(prods => ({label:prods.name_product, 
        value:prods.price}))} onChange={(ev)=>handleProduct(ev)}/> 
        </div>

        <div className="form-group row">
        <label htmlFor="quantity">Quantity:</label>
    <input type="number" name="quantity"
    value={quantity} onChange={(e)=> setQuantity(parseInt(e.target.value))} className="form-control"/> 
    </div>

    <div className="form-group row">
    <label htmlFor="total_paid">Total:</label>
    <input type="number" name="total_paid"
    value={total_paid*quantity} className="form-control"/> 
    </div>
    <button onClick={useForm}  className="btn btn-outline-success">Create bill</button>
        </div>
        </form>
    </div>
  )
}

export default BillForm