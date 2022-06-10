import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import ProviderForm from './components/ProviderForm'
import ProviderList from './components/ProviderList'
import PrivateRoutes from './routes/PrivateRoutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>Raul's store Header</header>
      <BrowserRouter>
      <PrivateRoutes/>
      </BrowserRouter>
      <footer> Contact us: 3194170618</footer>
    </div>
  )
}

export default App
