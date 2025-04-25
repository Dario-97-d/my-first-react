import {useState} from 'react'

function Laranjolas()
{
    const [laranjas, setLaranjas] = useState(['🍊', '🍊'])

    const aumentaLaranja = () => {
        setLaranjas([...laranjas, '🍊'])
    }

    const comeLaranja = () => {
        setLaranjas(laranjas.slice(0, -1))
    }

    return (
        <>
        <div style={{ display: 'flex', gap: '1em', justifyContent: 'center', margin: '1rem' }}>
            <p>{laranjas.map(l => l)}</p>
            
            <button onClick={aumentaLaranja}>Aumenta</button>
            <button onClick={comeLaranja}>Come</button>
        </div>
        </>
    )
}

export default Laranjolas