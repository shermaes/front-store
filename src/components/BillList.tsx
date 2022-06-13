import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getBills from '../actions/GetBills'
import { gettingBills } from '../state/slice/BillsSlice'
import store from '../state/Store'

const BillList = () => {

    const dispatch = useDispatch()

    const billsSavedInStore = useSelector((state:store) => state.bill)
    
    useEffect(()=>{
        getBills().then(
            (receipt)=>{
                dispatch(gettingBills(receipt))
            }
        )
        },[])
        
  return (
    <div>
      <h2>All of the bills created</h2>
    <ul>
         {billsSavedInStore.map((bill)=>
            <tr key={bill.id}>
                <td>Date: {bill.date}</td>
                <td> Client: {bill.client_name}</td>
                <td> Clerk: {bill.clerk}</td>
                <td> Product sold: {bill.productsSold}</td>
                <td> Quantity:{bill.quantity}</td>
                <td> Your charge:{bill.total_paid}</td>
            </tr>)}
            </ul>  

    </div>
  )
}

export default BillList