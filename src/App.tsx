import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/VisualComponents/Header'
import PrivateRoutes from './routes/PrivateRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <BrowserRouter>
      <PrivateRoutes/>
      </BrowserRouter>
    </div>
  )
}

export default App
