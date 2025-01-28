import '@styles/App.css'
import Card from '@components/Card'
import Header from '@components/Header'
import Footer from '@components/Footer'

const handleRandom = () => {
  const randomNumber = Math.floor(Math.random() * 150) + 1
  return randomNumber
}

const pokemonList = [handleRandom(), handleRandom(), handleRandom(), handleRandom(), handleRandom(), handleRandom(), handleRandom(), handleRandom(), handleRandom(), handleRandom()]

function App() {

  return (
    <>
    <Header/>
    <div className="card-container">
      {pokemonList.map((element, index) => {
        return <Card pokemon={element} key={index}/>
      })}
    </div>
    <Footer/>
    </>
  )
}

export default App
