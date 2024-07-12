import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [songs, setSongs] = useState([])
  useEffect(() => {
    fetch('https://playground.4geeks.com/sound/songs').
      then((response) => response.json()).
      then((data) => {
        setSongs(data.songs)
      } ).
      then(console.log(songs))
  }, [])
  
  return (
    <>
      <h1>Audio player</h1>
      <div id="songs">
        {songs.map((song, index) => {
          return <p>{song.name}</p>
        })}
      </div>
    </>
  )
}

export default App
