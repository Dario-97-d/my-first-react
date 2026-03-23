import { useState, useEffect } from 'react'

export default function AnimatedSection({ children, id })
{
  const [opening, setOpening] = useState(false)
  
  useEffect(() => {
    requestAnimationFrame(() => setOpening(true))
  }, [])
  
  return (<>
    <section id={id} className={ opening ? 'opening' : '' }>
      {children}
    </section>
  </>)
}
