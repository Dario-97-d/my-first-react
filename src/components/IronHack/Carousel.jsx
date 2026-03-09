import { useState } from 'react'

function Carousel(props)
{
    const { images } = props
    const [current, setCurrent] = useState(0)

    const handleClickLeft = () => {
        setCurrent(((current || images.length) - 1) % images.length)
    }

    const handleClickRight = () => {
        setCurrent((current + 1) % images.length)
    }

    return (<>
        <h3>Dice Carousel</h3>

        <div style={{ display: 'flex', gap: '2rem', margin: '1rem', justifyContent: 'center' }}>
            <button onClick={handleClickLeft} style={{ height: '5rem', width: '5rem', borderRadius: '50% 10% 10% 50%', backgroundColor: 'rgba(229,229,229,0.75)' }}>Left</button>
            
            <img src={images[current]} alt={current} style={{ height: '5rem', width: '5rem' }} />
            
            <button onClick={handleClickRight} style={{ height: '5rem', width: '5rem', borderRadius: '10% 50% 50% 10%', backgroundColor: 'rgba(229,229,229,0.75)' }}>Right</button>
        </div>

    </>)
}

export default Carousel