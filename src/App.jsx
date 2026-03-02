import { useState } from 'react'
import './App.css'

import Session1 from './components/Session1'
import Session2 from './components/Session2'
import Session3 from './components/Session3'
import IronHack from './components/IronHack'
import Products from './components/Products'

function App() {
  const [showSession1, setShowSession1] = useState(false);
  const [showSession2, setShowSession2] = useState(false);
  const [showSession3, setShowSession3] = useState(false);
  const [showIronHack, setShowIronHack] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  return (<>

  <h1>Dário Dias</h1>
  <h2>React Fundamentals Training</h2>

  <h2><a href="#" onClick={() => setShowSession1(!showSession1)}>-- Session 1 --</a></h2>
  {showSession1 && <Session1 />}

  <h2><a href="#" onClick={() => setShowSession2(!showSession2)}>-- Session 2 --</a></h2>
  {showSession2 && <Session2 />}

  <h2><a href="#" onClick={() => setShowSession3(!showSession3)}>-- Session 3 --</a></h2>
  {showSession3 && <Session3 />}

  <h2><a href="#" onClick={() => setShowIronHack(!showIronHack)}>-- IronHack --</a></h2>
  {showIronHack && <IronHack />}

  <h2><a href="#" onClick={() => setShowProducts(!showProducts)}>-- Products --</a></h2>
  {showProducts && <Products />}

  </>
  )
}

export default App
