import { useState } from 'react'
import Header from './components/Header/Header'
import Global from './styles/Global'
import Banner from './components/Banner/Banner'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Banner/>
     <Home/>
     <Footer/> 
     <Global/>
    </>
  )
}

export default App;
