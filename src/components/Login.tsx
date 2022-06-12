import { useSelector } from 'react-redux'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import {stateType} from '../state/Store'



const Login = () => {

    const {user} = useSelector((state:stateType) => state.logged)

    
  return (
    <div className="App"> 
    <BrowserRouter>
    {user!==null?
    <nav>
      <Link to="/logInGoogle">Log in with google</Link>
      <Link to="/logIn">Log in</Link>
      <Link to="/SignIn">Sign in</Link>
      <Link to="/welcome">Welcome</Link>
    </nav>:
    <nav>
      <Link to="/logInGoogle">Log in with google</Link>
      <Link to="/logIn">Log in</Link>
      <Link to="/SignIn">Sign in</Link>
    </nav>
    }
    <Routes>
    
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default Login