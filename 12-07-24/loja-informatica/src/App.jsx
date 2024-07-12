import Banner from "./Components/Banner"
import Header from "./Components/Header"
import Card from "./Components/Cards"

function App() {
  

  return (
    <>
      <div className="App">
        <Header />
        <Banner />
      </div>
      <main className="container">
        <h3 className="mt-3 mb-3">Bem-vindo ao meu site</h3>
        <Card />
      </main>
    </>
  )
}

export default App
