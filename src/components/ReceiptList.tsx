import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getReceipt from '../actions/GetReceipt'
import { gettingReceipt, receiptType } from '../state/slice/ReceiptSlice'
import store from '../state/Store'

const ReceiptList = () => {

    const dispatch = useDispatch()

    const receiptsSavedInStore = useSelector((state:store) => state.receipt)

    useEffect(()=>{
        getReceipt().then(
            (receipt)=>{
                dispatch(gettingReceipt(receipt))
            }
        )
        },[])
        
  return (
    <div>
    <h2>All of the receipts created</h2>
    <ul>
         {receiptsSavedInStore.map((receipt)=>
            <tr key={receipt.id}>
                <td>Date: {receipt.date}</td>
                <td> Product ID: {receipt.id_product}</td>
                <td> Provider: {receipt.provider.name}</td>
                <td>Quantity: {receipt.quantity}</td>
            </tr>)}
            </ul>
    </div>

  )
}

export default ReceiptList