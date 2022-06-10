import { useState } from 'react'
import './App.css'
import ProviderForm from './components/ProviderForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <ProviderForm></ProviderForm>
    </div>
  )
}

export default App
