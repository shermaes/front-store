import { Link, Route, Routes } from "react-router-dom";
import ProviderForm from "../components/ProviderForm";
import ProviderList from "../components/ProviderList";

function PrivateRoutes() {
    return(
        <div>
            <Link to='/'>Add a new Provider</Link>
            <Link to='/providers'>Providers</Link>

            <Routes>
            <Route path="/" element={<ProviderForm/>}></Route>
            <Route path="/providers" element={<ProviderList/>}></Route>
            </Routes>
        </div>
    )
}
export default PrivateRoutes
