import { useState } from "react"
import { useDispatch } from "react-redux"
import postProvider from "../actions/PostProvider"

//Here I have the form where I'll get the info for the providers
const ProviderForm = () =>{

    const dispatch = useDispatch()
    const[providerName, setProviderName]=useState('')
    const[passport, setPassport]=useState('')
    const[phone, setPhone]=useState('')

const useForm = (e:React.FormEvent<HTMLButtonElement>) =>{
        e.preventDefault()
        postProvider(providerName, phone, passport, dispatch)
        setProviderName("")
        setPhone("")
        setPassport("")
}

return (
    <form>
        <label htmlFor="providerName">Provider name:</label>
        <input type="text" name="providerName"
        value={providerName} onChange={(e)=> setProviderName(e.target.value)}/> 
        <br />
        <label htmlFor="passport">Passport:</label>
        <input type="text" name="passport"
        value={passport} onChange={(e)=>setPassport(e.target.value)}/> 
        <br />
        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone"
        value={phone} onChange={(e)=> setPhone(e.target.value)}/> 
        <br />
        <button onClick={useForm}>Create Provider</button>
    </form>
)}
export default ProviderForm