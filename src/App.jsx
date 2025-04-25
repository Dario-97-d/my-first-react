import { useState } from 'react'
import './App.css'

import Aula1 from './components/Aula1'
import Lab1 from './components/Lab1'
import Aula3 from './components/Aula3'
import IronHack from './components/IronHack'
import Products from './components/Products'

function App() {
  const [showAula1, setShowAula1] = useState(false);
  const [showLab1, setShowLab1] = useState(false);
  const [showAula3, setShowAula3] = useState(false);
  const [showIronHack, setShowIronHack] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  return (<>

  <h1>Dário</h1>
  <h2>Fundamentos de React</h2>

  <h2><a href="#" onClick={() => setShowAula1(!showAula1)}>-- Aula 1 --</a></h2>
  {showAula1 && <Aula1 />}

  <h2><a href="#" onClick={() => setShowLab1(!showLab1)}>-- Lab 1 --</a></h2>
  {showLab1 && <Lab1 />}

  <h2><a href="#" onClick={() => setShowAula3(!showAula3)}>-- Aula 3 --</a></h2>
  {showAula3 && <Aula3 />}

  <h2><a href="#" onClick={() => setShowIronHack(!showIronHack)}>-- IronHack --</a></h2>
  {showIronHack && <IronHack />}

  <h2><a href="#" onClick={() => setShowProducts(!showProducts)}>-- Products --</a></h2>
  {showProducts && <Products />}

  </>
  )
}

export default App
