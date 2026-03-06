import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Apolobyte</h1>


      <div>
        <form action="">
          <input type="text" placeholder="Enter text" />
          <button type="submit">Submit</button>
        </form>

        <ol>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
        </ol>


      </div>

    </>
  )
}

export default App
