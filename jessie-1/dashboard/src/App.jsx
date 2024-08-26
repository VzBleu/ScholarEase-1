import { useState } from 'react'
import './index.css';
import Sidebar from './Components/Sidebar';
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "page"> 
      <Sidebar />

       
    </div>
  )
}

export default App
