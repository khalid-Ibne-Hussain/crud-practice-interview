import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddButton from './components/AddButton'
import AddSecondButton from './components/AddSecondButton'
import FormHandle from './components/FormHandle'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddButton />
      <AddSecondButton />
      <FormHandle />
    </>
  )
}

export default App
