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
    <form className="form-inline">

        <div className="form-group row">
        <h2>Adding a new Provider</h2>

        <div className="col-sm-10">
        <label htmlFor="providerName">Provider name:</label>
        <input type="text" name="providerName"
        value={providerName} onChange={(e)=> setProviderName(e.target.value)}  className="form-control" placeholder="EX: HappyScrew"/> 
        </div>

        <div className="col-sm-10">
        <label htmlFor="passport">Passport:</label>
        <input type="text" name="passport"
        value={passport} onChange={(e)=>setPassport(e.target.value)}  className="form-control" placeholder="EX: AE387R"/> 
        </div>
       <div className="col-sm-10">
        <label htmlFor="phone">Phone:</label>
        <input type="text" name="phone"
        value={phone} onChange={(e)=> setPhone(e.target.value)}  className="form-control" placeholder="EX: 319-4175289"/> 
        </div>
        
        <button onClick={useForm} className="btn btn-outline-success">Create Provider</button>
        
        </div>
    </form>
)}
export default ProviderForm