import Categories from "./Components/Category"
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
        <Categories />
      </main>
    </>

  )
}

export default App
