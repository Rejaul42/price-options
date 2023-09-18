
import './App.css'
import Navbar from './components/NavBar/Navbar'
import PriceOptions from './components/PricesOptions/PriceOptions/PriceOptions'

function App() {

  return (
    <>
    <Navbar></Navbar>
      <h1 className='text-center text-7xl'>Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
