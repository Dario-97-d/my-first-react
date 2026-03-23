import { useState } from 'react'
import useAdaptiveLayout from './utils/useAdaptiveLayout'
import './App.css'

import AnimatedSection from './AnimatedSection'

import Session1 from './components/Session1'
import Session2 from './components/Session2'
import Session3 from './components/Session3'
import IronHack from './components/IronHack'
import Products from './components/Products'

export default function App()
{
  const [showSections, setShowSections] = useState({});

  const isExpanded = Object.values(showSections).some(isShow => isShow);

  const {
    headerRef,
    mainRef,
    footerRef,
    headerScale,
    headerHeight,
    mainHeight
  } = useAdaptiveLayout(isExpanded);

  const toggleSection = (section) => {
    const isOpening = !showSections[section];

    // Update state.
    setShowSections(prev => {
      return {
        ...prev,
        [section]: !prev[section]
      }
    });

    // -- Scroll down a nudge, if opening section Products --

    if (!isOpening || section !== 'products') return;

    const main = mainRef.current;
    if (!main) return;

    // Request scroll animation for when the section is mounted.
    requestAnimationFrame(() => {
      main.scrollBy({
        top: 32,
        behavior: 'smooth'
      });
    });
  };

  const hideAll = () => setShowSections({});

  return (<>

    <header
      ref={headerRef}
      style={{ height: `${headerHeight}px`, transform: `scale(${headerScale})` }}
    >
      <h1>Dário Dias</h1>
      <h2>React Fundamentals Training</h2>
    </header>

    <main
      ref={mainRef}
      style={{ height: `${mainHeight}px` }}
      className={ isExpanded ? 'main-expanded' : '' }
    >

      <h3><a onClick={() => toggleSection('session1')}>-- Session 1 --</a></h3>
      {showSections.session1 &&
        <AnimatedSection id="session-1">
          <Session1 />
        </AnimatedSection>
      }

      <h3><a onClick={() => toggleSection('session2')}>-- Session 2 --</a></h3>
      {showSections.session2 &&
        <AnimatedSection id="session-2">
          <Session2 />
        </AnimatedSection>
      }

      <h3><a onClick={() => toggleSection('session3')}>-- Session 3 --</a></h3>
      {showSections.session3 &&
        <AnimatedSection id="session-3">
          <Session3 />
        </AnimatedSection>
      }

      <h3><a onClick={() => toggleSection('ironHack')}>-- IronHack --</a></h3>
      {showSections.ironHack &&
        <AnimatedSection id="iron-hack">
          <IronHack />
        </AnimatedSection>
      }

      <h3><a onClick={() => toggleSection('products')}>-- Products --</a></h3>
      {showSections.products &&
        <AnimatedSection id="products">
          <Products />
        </AnimatedSection>
      }

    </main>

    <footer
      ref={footerRef}
      className={ (isExpanded ? '' : 'invisible') }
    >
      <button onClick={hideAll} disabled={ !isExpanded }>
        Hide All
      </button>
    </footer>

  </>)
}
