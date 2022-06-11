import { Link, Route, Routes } from "react-router-dom";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import ProviderForm from "../components/ProviderForm";
import ProviderList from "../components/ProviderList";

function PrivateRoutes() {
    return(
        <div>
            
            <tr><Link to='/'>Add a new Provider</Link></tr>
            
            <tr><Link to='/providers'>Show Providers</Link></tr>

           <tr><Link to ='/products'>Show Products</Link></tr> 
           
           <tr><Link to ='/addingProvider'>Add a new Product</Link></tr>

            <Routes>
            <Route path="/" element={<ProviderForm/>}></Route>
            <Route path="/providers" element={<ProviderList/>}></Route>
            <Route path="/products" element={<ProductList/>}></Route>
            <Route path="/addingProvider" element={<ProductForm/>}></Route>
            </Routes>
        </div>
    )
}
export default PrivateRoutes
