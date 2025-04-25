import { useRef, useState } from 'react'

function Laranjas()
{
    const [ laranjas, setLaranjas ] = useState(5);

    const isBichos = laranjas === 'bichos';

    const aumentaLaranja = () => {
        // Não pode aumentar laranjas se forem bichos.
        if (laranjas === 'bichos') return;
        
        if (Math.random() < 0.1) {
            setLaranjas('bichos')
        }
        else {
            setLaranjas(laranjas + 1)
        }
    }

    const comeLaranja = () => {
        // Não pode comer laranjas se forem bichos.
        if (laranjas === 'bichos') return;

        setLaranjas(laranjas - 1)
    }

    const limpaLaranjas = () => {
        setLaranjas(5)
    }

    const buttonStyles = {
        aumenta: { backgroundColor: isBichos ? 'gray' : 'green', color: 'white' },
        come: { backgroundColor: isBichos ? 'gray' : 'red', color: 'white' },
        limpa: { backgroundColor: isBichos ? 'blue' : 'gray', color: 'white' },
    };

    return (
        <>
        <div style={{ display: 'flex', gap: '1em', justifyContent: 'center', margin: '1rem' }}>
            <p>{ isBichos ? '🐛🐛🐛' : laranjas + ' 🍊' }</p>
            
            <button onClick={aumentaLaranja} style={buttonStyles.aumenta} disabled={isBichos}>Aumenta</button>
            <button onClick={comeLaranja} style={buttonStyles.come} disabled={isBichos}>Come</button>
            <button onClick={limpaLaranjas} style={buttonStyles.limpa} disabled={!isBichos}>Limpa</button>
        </div>
        </>
    )
}

export default Laranjas