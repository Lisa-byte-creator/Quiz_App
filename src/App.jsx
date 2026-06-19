import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import Quiz from './components/quiz'
import Results from './components/results'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className = "app-container">

      <h1>Quiz App</h1>

      {/*calling the quiz component*/}
      <Quiz/>
       

    </div>
  )
}

export default App
