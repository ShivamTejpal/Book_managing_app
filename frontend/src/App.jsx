import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddBook } from '../components/AddBook'
import { Books } from '../components/Books'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <AddBook/>
        <Books/>
      </div>
      
  )
}

export default App
