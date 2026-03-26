import { useEffect, useRef } from 'react'
import styles from './NumbersTable.module.css'

export default function NumbersTable(props)
{
  const { limit } = props

  const wrapperRef = useRef(null)
  const handleRef = useRef(null)

  const numbers = Array.from({ length: limit }, (e, i) => i + 1)

  useEffect(() => {
    const wrapper = wrapperRef.current
    const handle = handleRef.current

    let startX
    let startWidth

    const onMove = (clientX) => {
      const dx = clientX - startX
      wrapper.style.width = `${startWidth + dx}px`
    }

    const onEnd = () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onEnd)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onEnd)
    }

    const onMouseMove = (e) => onMove(e.clientX)
    const onTouchMove = (e) => {
      e.preventDefault()
      onMove(e.touches[0].clientX)
    }

    const onMouseDown = (e) => {
      startX = e.clientX
      startWidth = wrapper.offsetWidth
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseup', onEnd)
    }

    const onTouchStart = (e) => {
      startX = e.touches[0].clientX
      startWidth = wrapper.offsetWidth
      window.addEventListener('touchmove', onTouchMove, { passive: false })
      window.addEventListener('touchend', onEnd)
    }

    handle.addEventListener('mousedown', onMouseDown)
    handle.addEventListener('touchstart', onTouchStart, { passive: true })

    return () => {
      handle.removeEventListener('mousedown', onMouseDown)
      handle.removeEventListener('touchstart', onTouchStart)
    }
  }, [])

  return (<>
    <h3>Flexboxing</h3>

    <div className={styles['fixed-background']}>
      <div ref={wrapperRef} className={ styles['wrapper'] }>
        <div className={ styles['div-table'] }>
          {numbers.map(n => <div key={n} className={ styles['div-number'] }>{n}</div>)}
        </div>

        <div ref={handleRef} className={ styles['pan-for-resize'] }></div>
      </div>
    </div>
  </>)
}
