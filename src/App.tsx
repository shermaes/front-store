import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import PrivateRoutes from './routes/PrivateRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>Raul's store Header</header>
      <BrowserRouter>
      <PrivateRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App
