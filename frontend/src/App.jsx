import { useState } from 'react'
import './App.css'
import { AddBook } from '../components/AddBook'
import { Books } from '../components/Books'

function App() {
  const [books, setbooks] = useState([]);


  fetch("http://localhost:3000/books")
  .then(async function(res){
    const json = await res.json();
    setbooks(json.books);
  })
  return (
    
      <div>
        <AddBook/>
        <Books books={[
          {
            title:"Atomic Habbits",
            description:"fgaga",
            completed:false,
          }
        ]}></Books>
      
      </div>
      
  )
}

export default App
