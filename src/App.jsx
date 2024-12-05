import Categories from "./Components/Category"
import Navbar from "./Components/Navbar"
import Portners from "./Components/Portners"



function App() {


  return (
    <>
      <header>
        <Navbar />
      </header>


      <main>
        <Portners />
        <Categories />
      </main>
    </>

  )
}

export default App
