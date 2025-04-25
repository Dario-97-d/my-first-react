import {useState} from 'react'

function Frutas()
{
    const tiposFrutas = ['🍊','🍎','🍐','🍍','🍉','🍇']
    
    const randomFruta = () => tiposFrutas[Math.floor(Math.random() * tiposFrutas.length)]

    const [frutas, setFrutas] = useState([
        {
            id: Date.now(),
            kind: randomFruta()
        }
    ])

    const aumentaFruta = () => {
        setFrutas([...frutas, {
            id: Date.now(),
            kind: randomFruta()
        }])
    }

    const comeFruta = () => {
        setFrutas(frutas.slice(0, -1))
    }

    const limpaFrutas = () => {
        setFrutas([])
    }

    const mudaFruta = (id) => {
        setFrutas(frutas.map(f => 
            f.id === id ? { ...f, kind: randomFruta() } : f
        ))
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem' }}>
            <div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Cesto das frutas</div>

            <div style={{ margin: '1rem', width: '20rem', flexWrap: 'wrap', display: 'flex', gap: '1em', justifyContent: 'center' }}>
                {frutas.map(f => (
                    <button key={f.id} onClick={() => mudaFruta(f.id)}>
                        {f.kind}
                    </button>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
                <button onClick={aumentaFruta}>Aumenta</button>
                <button onClick={comeFruta}>Come</button>
                <button onClick={limpaFrutas}>Limpa</button>
            </div>
        </div>
    )
}

export default Frutas