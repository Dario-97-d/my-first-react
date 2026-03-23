import { useState, Fragment } from 'react'
import useAdaptiveLayout from './utils/useAdaptiveLayout'
import './App.css'

import AnimatedSection from './AnimatedSection'

import Session1 from './components/Session1'
import Session2 from './components/Session2'
import Session3 from './components/Session3'
import IronHack from './components/IronHack'
import Products from './components/Products'

const SECTIONS = [
  { key: 'session1',  label: 'Session 1',  Component: Session1  },
  { key: 'session2',  label: 'Session 2',  Component: Session2  },
  { key: 'session3',  label: 'Session 3',  Component: Session3  },
  { key: 'ironHack',  label: 'IronHack',   Component: IronHack  },
  { key: 'products',  label: 'Products',   Component: Products  },
]

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

      {SECTIONS.map(({ key, label, Component }) => (
        <Fragment key={key}>
          <h3><a onClick={() => toggleSection(key)}>-- {label} --</a></h3>
          {showSections[key] &&
            <AnimatedSection id={key}>
              <Component />
            </AnimatedSection>
          }
        </Fragment>
      ))}

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
