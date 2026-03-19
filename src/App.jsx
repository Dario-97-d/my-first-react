import { useRef, useState, useLayoutEffect } from 'react'
import debounce from './utils/debounce'
import './App.css'

import Session1 from './components/Session1'
import Session2 from './components/Session2'
import Session3 from './components/Session3'
import IronHack from './components/IronHack'
import Products from './components/Products'

function App() {
  const headerRef = useRef(null);
  const mainRef = useRef(null);
  const footerRef = useRef(null);

  const [headerScale, setHeaderScale] = useState(1);
  const [headerHeight, setHeaderHeight] = useState('auto');
  const [mainHeight, setMainHeight] = useState('auto');

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

  const isExpanded = [
    showSession1,
    showSession2,
    showSession3,
    showIronHack,
    showProducts
  ].some((isShow) => isShow);

  useLayoutEffect(() => {
    // -- Adjust layout on window resize and when there is/isn't any section open --

    adjustLayout();

    // Debounce the call to adjustLayout to prevent unnecessary calculations on drag resizing.
    const debouncedAdjust = debounce(adjustLayout, 50);

    // Make the layout adjustment work on window resize.
    // It needs a fresh listener on each effect run
    // because adjustLayout relies on the effect from the change of state of isExpanded.
    window.addEventListener('resize', debouncedAdjust);

    // Return a callback removing the listener so that React removes it the next time the effect is run.
    // React calls this function when either the component is unmounted or the effect is run again.
    return () => window.removeEventListener('resize', debouncedAdjust);
  }, [isExpanded]);

  const adjustLayout = () => {
    // -- Update height of main, and scale down header if needed --

    const header = headerRef.current;
    const main = mainRef.current;
    const footer = footerRef.current;

    if (!header || !main || !footer) return;

    const viewportHeight = window.innerHeight;
    let newMainHeight;
    let newHeaderHeight;

    if (isExpanded) {
      // -- Set main height as the reaminder of header and footer, but minimum 50vh --
      // -- Scale down the header element, if needed --

      newMainHeight = Math.max(
        0.5 * viewportHeight,
        viewportHeight - header.scrollHeight - footer.scrollHeight);

      newHeaderHeight = viewportHeight - newMainHeight - footer.scrollHeight;
    } else {
      // -- Set main height equal to its total height, but maximum 50vh --
      // -- Scale header back up, if there is room --

      // -- Get total height of main --
      // When getting main.scrollHeight,
      // the expanded main's height (from the previous state) is given,
      // hence the need to calculate the collapsed height.

      // Get vertical padding of main.
      const mainComputedStyle = window.getComputedStyle(main);
      const mainVerticalPadding = parseFloat(mainComputedStyle.paddingTop) + parseFloat(mainComputedStyle.paddingBottom);

      // Get sum of first-level h3 titles' heights.
      const h3s = Array.from(main.querySelectorAll(':scope > h3'));
      const h3sHeight = h3s.reduce((sum, el) => sum + el.scrollHeight, 0);

      // Prevent scaling down the header too much.
      newMainHeight = Math.min(
        0.5 * viewportHeight,
        mainVerticalPadding + h3sHeight);

      // Prevent header from scaling upper than 1.
      newHeaderHeight = Math.min(
        header.scrollHeight,
        viewportHeight - newMainHeight - footer.scrollHeight);
    }

    // Set final heights of header and main.
    setMainHeight(newMainHeight);
    setHeaderHeight(newHeaderHeight);
    setHeaderScale(newHeaderHeight / header.scrollHeight);
  }

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

    <h3><a onClick={toggleSession1}>-- Session 1 --</a></h3>
    {showSession1 &&
      <section id="session-1">
        <Session1 />
      </section>
    }

    <h3><a onClick={toggleSession2}>-- Session 2 --</a></h3>
    {showSession2 &&
      <section id="session-2">
        <Session2 />
      </section>
    }

    <h3><a onClick={toggleSession3}>-- Session 3 --</a></h3>
    {showSession3 &&
      <section id="session-3">
        <Session3 />
      </section>
    }

    <h3><a onClick={toggleIronHack}>-- IronHack --</a></h3>
    {showIronHack &&
      <section id="iron-hack">
        <IronHack />
      </section>
    }

    <h3><a onClick={toggleProducts}>-- Products --</a></h3>
    {showProducts &&
      <section id="products">
        <Products />
      </section>
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

  </>
  )
}

export default App
