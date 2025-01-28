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
    return randomNumber2
  }
}

const shuffledArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i  + 1));
    [array[i], array[j]] = [array[j], array[i]]
  } 
  return array
}

const pokemonList = Array.from({ length: 10 }, () => ({
  id: handleRandom(),
  clicked: false,
}))

function App() {
  const [initialPokemons, setInitialPokemons] = useState(pokemonList)
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)

  const handleImage = () => {
    const shuffledPokemons = shuffledArray([...initialPokemons])
    setInitialPokemons(shuffledPokemons)
    console.log('shuffled')
  }

  const handleScore = (index) => {
    setInitialPokemons(prevPokemons => {
      const newPokemons = [...prevPokemons]
      if (newPokemons[index].clicked) {
        setBestScore(prevBestScore => Math.max(prevBestScore, score))
        window.location.reload()
        return newPokemons
      } else {
        newPokemons[index].clicked = true
        setScore(prevScore => prevScore + 1)
        return newPokemons
      }
    })
  }

  return (
    <>
    <Header score={score} bestScore={bestScore}/>
    <div className="card-container">
      {initialPokemons.map((element, index) => {
        return <Card pokemon={element.id} key={index} onClick={() => {
          handleScore(index)
          handleImage()
        }}/>
      })}
    </div>
    <Footer/>
    </>
  )
}

export default App
