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
  
  const toggleSession1 = () => setShowSession1(!showSession1);
  const toggleSession2 = () => setShowSession2(!showSession2);
  const toggleSession3 = () => setShowSession3(!showSession3);
  const toggleIronHack = () => setShowIronHack(!showIronHack);
  const toggleProducts = () => setShowProducts(!showProducts);
  
  const hideAll = () => {
    setShowSession1(false);
    setShowSession2(false);
    setShowSession3(false);
    setShowIronHack(false);
    setShowProducts(false);
  }
  
  const isAnySectionOpen = () => {
    return [
      showSession1,
      showSession2,
      showSession3,
      showIronHack,
      showProducts
    ].some((isShow) => isShow);
  }

  return (<>

  <header>
    <h1>Dário Dias</h1>
    <h2>React Fundamentals Training</h2>
  </header>

  <main className={isAnySectionOpen() ? 'main-expanded' : ''}>

    <h3><a href="#" onClick={toggleSession1}>-- Session 1 --</a></h3>
    {showSession1 &&
      <section id="session-1">
        <Session1 />
      </section>
    }

    <h3><a href="#" onClick={toggleSession2}>-- Session 2 --</a></h3>
    {showSession2 &&
      <section id="session-2">
        <Session2 />
      </section>
    }

    <h3><a href="#" onClick={toggleSession3}>-- Session 3 --</a></h3>
    {showSession3 &&
      <section id="session-3">
        <Session3 />
      </section>
    }

    <h3><a href="#" onClick={toggleIronHack}>-- IronHack --</a></h3>
    {showIronHack &&
      <section id="iron-hack">
        <IronHack />
      </section>
    }

    <h3><a href="#" onClick={toggleProducts}>-- Products --</a></h3>
    {showProducts &&
      <section id="products">
        <Products />
      </section>
    }

  </main>

  <footer className={ (isAnySectionOpen() ? '' : 'invisible') }>
    <button onClick={hideAll} disabled={ !isAnySectionOpen() }>
      Hide All
    </button>
  </footer>

  </>
  )
}

export default App
