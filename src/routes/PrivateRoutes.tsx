import { Link, Route, Routes } from "react-router-dom";
import GoogleLoginForm from "../components/LogInComponents/GoogleLoginForm";
import LogIn from "../components/LogInComponents/LogIn";
import SignIn from "../components/LogInComponents/SigIn";
import WelcomePage from "../components/LogInComponents/WelcomePage";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import ProviderForm from "../components/ProviderForm";
import ProviderList from "../components/ProviderList";
import ReceiptForm from "../components/ReceiptForm";
import ReceiptList from "../components/ReceiptList";

function PrivateRoutes() {
    return(
        <div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/logIn" className="nav-item nav-link active" >Log in</Link>

        <Link to="/logInGoogle" className="nav-item nav-link active">Log in with google</Link>

        <Link to="/signIn" className="nav-item nav-link active">Sign in</Link>
            
        <Link to='/' className="nav-item nav-link active">Add a new Provider</Link>
            
        <Link to='/providers' className="nav-item nav-link active">Show Providers</Link>

        <Link to ='/products' className="nav-item nav-link active">Show Products</Link>
           
        <Link to ='/addingProvider' className="nav-item nav-link active">Add a new Product</Link>

        <Link to ='/receipts' className="nav-item nav-link active">Show Receipts</Link> 

        <Link to ='/addingReceipts' className="nav-item nav-link active">Add a new Receipt</Link>

</nav>
            

            <Routes>
            <Route path="/" element={<ProviderForm/>}></Route>
            <Route path="/providers" element={<ProviderList/>}></Route>
            <Route path="/products" element={<ProductList/>}></Route>
            <Route path="/addingProvider" element={<ProductForm/>}></Route>
            <Route path="/receipts" element={<ReceiptList/>}></Route>
            <Route path="/addingReceipts" element={<ReceiptForm/>}></Route>
            <Route path="logIn" element={<LogIn />}></Route>
            <Route path="signIn" element={<SignIn/>}></Route>
            <Route path="logInGoogle" element={<GoogleLoginForm/>}></Route>
            <Route path="/welcome" element={<WelcomePage/>}></Route>
            </Routes>
        </div>
    )
}
export default PrivateRoutes
