import { useState} from 'react'
import '@styles/App.css'
import Card from '@components/Card'
import Header from '@components/Header'
import Footer from '@components/Footer'

const handleRandom = () => {
  const randomNumber = Math.floor(Math.random() * 150)
  const randomNumber2 = Math.floor(Math.random() * 150)
  if (randomNumber === randomNumber2) {
    return handleRandom()
  } else {
    return randomNumber
  }
}

const shuffledArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i  + 1));
    [array[i], array[j]] = [array[j], array[i]]
  } 
  return array
}

const pokemonList = [handleRandom(), handleRandom(), handleRandom(), handleRandom(), handleRandom(), handleRandom(), handleRandom(), handleRandom(), handleRandom(), handleRandom()]

function App() {

  const [initialPokemons, setInitialPokemons] = useState(pokemonList)



  const handleImage = () => {
    const shuffledPokemons = shuffledArray([...initialPokemons])
    setInitialPokemons(shuffledPokemons)
    console.log('shuffled')
  }

  return (
    <>
    <Header/>
    <div className="card-container">
      {initialPokemons.map((element, index) => {
        return <Card pokemon={element} key={index} onClick={handleImage}/>
      })}
    </div>
    <Footer/>
    </>
  )
}

export default App
