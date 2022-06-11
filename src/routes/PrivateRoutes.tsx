import { Link, Route, Routes } from "react-router-dom";
import ProductList from "../components/ProductList";
import ProviderForm from "../components/ProviderForm";
import ProviderList from "../components/ProviderList";

function PrivateRoutes() {
    return(
        <div>
            <tr><Link to='/'>Add a new Provider</Link></tr>
            
            <tr><Link to='/providers'>Providers</Link></tr>

           <tr><Link to ='/products'>Products</Link></tr> 

            <Routes>
            <Route path="/" element={<ProviderForm/>}></Route>
            <Route path="/providers" element={<ProviderList/>}></Route>
            <Route path="/products" element={<ProductList/>}></Route>
            </Routes>
        </div>
    )
}
export default PrivateRoutes
