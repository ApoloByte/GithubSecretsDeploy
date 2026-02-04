import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1>Apolobyte</h1>
      <h2>
        Importante: Esta es una aplicación de ejemplo creada con Vite y React.
        Puedes modificarla según tus necesidades.
      </h2>

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

        <h1>Hola Mundo</h1>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
