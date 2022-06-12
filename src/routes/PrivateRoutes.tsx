import { Link, Route, Routes } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import ProviderForm from "../components/ProviderForm";
import ProviderList from "../components/ProviderList";
import ReceiptForm from "../components/ReceiptForm";
import ReceiptList from "../components/ReceiptList";

function PrivateRoutes() {
    return(
        <div>
            
            <tr><Link to='/'>Add a new Provider</Link></tr>
            
            <tr><Link to='/providers'>Show Providers</Link></tr>

           <tr><Link to ='/products'>Show Products</Link></tr> 
           
           <tr><Link to ='/addingProvider'>Add a new Product</Link></tr>

           <tr><Link to ='/receipts'>Show Receipts</Link></tr> 

           <tr><Link to ='/addingReceipts'>Add a new Receipt</Link></tr>

            <Routes>
            <Route path="/" element={<ProviderForm/>}></Route>
            <Route path="/providers" element={<ProviderList/>}></Route>
            <Route path="/products" element={<ProductList/>}></Route>
            <Route path="/addingProvider" element={<ProductForm/>}></Route>
            <Route path="/receipts" element={<ReceiptList/>}></Route>
            <Route path="/addingReceipts" element={<ReceiptForm/>}></Route>
            </Routes>
        </div>
    )
}
export default PrivateRoutes
