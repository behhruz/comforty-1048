import Carusel from "./Components/Carusel"
import Navbar from "./Components/Navbar"
import Ot from "./Components/ot"
import Portners from "./Components/Portners"



function App() {


  return (
    <>
      <header>
        <Navbar />
        
      </header>


      <main>
        <Portners />
        <Ot />
        <Carusel />
      </main>
    </>

  )
}

export default App
