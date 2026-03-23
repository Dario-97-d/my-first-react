import { useRef, useState, useLayoutEffect } from 'react'
import debounce from './debounce'

export default function useAdaptiveLayout(isExpanded) {
  const headerRef = useRef(null);
  const mainRef = useRef(null);
  const footerRef = useRef(null);

  const [headerScale, setHeaderScale] = useState(1);
  const [headerHeight, setHeaderHeight] = useState('auto');
  const [mainHeight, setMainHeight] = useState('auto');

  useLayoutEffect(() => {
    // -- Adjust layout on window resize and when there is/isn't any section open --

    adjustLayout();

    // Debounce the call to adjustLayout to prevent unnecessary calculations on drag resizing.
    const debouncedAdjust = debounce(adjustLayout, 50);

    // -- Make the layout adjustment work on window resize --
    // It needs a fresh listener on each useEffect run
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

    // -- Get natural height of header --
    // When getting header.scrollHeight,
    // the bottom padding may get clipped in Chromium-based browsers.
    // This happens when an element's content overflows its scaled down height.

    // Get vertical padding of header.
    const headerComputedStyle = window.getComputedStyle(header);
    const headerVerticalPadding = parseFloat(headerComputedStyle.paddingTop) + parseFloat(headerComputedStyle.paddingBottom);

    // Get sum of header's children.
    const headerChildren = Array.from(header.children);
    const headerChildrenHeight = headerChildren.reduce((sum, el) => sum + el.scrollHeight, 0);

    const headerNaturalHeight = headerVerticalPadding + headerChildrenHeight;

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

      // -- Determine final values for the new heights --

      // Prevent scaling down the header too much.
      newMainHeight = Math.min(
        0.5 * viewportHeight,
        mainVerticalPadding + h3sHeight);

      // Prevent header from scaling upper than 1.
      newHeaderHeight = Math.min(
        headerNaturalHeight,
        viewportHeight - newMainHeight - footer.scrollHeight);
    }

    // Set final heights of header and main.
    setMainHeight(newMainHeight);
    setHeaderHeight(newHeaderHeight);
    setHeaderScale(newHeaderHeight / headerNaturalHeight);
  };

  return {
    headerRef,
    mainRef,
    footerRef,
    headerScale,
    headerHeight,
    mainHeight
  }
}
