import { useEffect, useRef } from 'react'
import styles from './NumbersTable.module.css'

function NumbersTable(props)
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

        const onMouseMove = (e) => {
            const dx = e.clientX - startX
            wrapper.style.width = `${startWidth + dx}px`
        }

        const onMouseUp = () => {
            window.removeEventListener('mousemove', onMouseMove)
            window.removeEventListener('mouseup', onMouseUp)
        }

        const onMouseDown = (e) => {
            startX = e.clientX
            startWidth = wrapper.offsetWidth

            window.addEventListener('mousemove', onMouseMove)
            window.addEventListener('mouseup', onMouseUp)
        }

        handle.addEventListener('mousedown', onMouseDown)

        return () => {
            handle.removeEventListener('mousedown', onMouseDown)
        }
    }, [])

    return (<>
        <h3>Flexboxing</h3>

        <div ref={wrapperRef} className={ styles['wrapper'] }>
            <div className={ styles['div-table'] }>

                {numbers.map(n => <div key={n} className={ styles['div-number'] }>{n}</div>)}

            </div>

            <div ref={handleRef} className={ styles['pan-for-resize'] }>
            </div>
        </div>
    </>)
}

export default NumbersTable