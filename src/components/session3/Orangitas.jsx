import {useState} from 'react'

export default function Orangitas()
{
    const [oranges, setOranges] = useState(['🍊', '🍊'])

    const addOrange = () => {
        setOranges([...oranges, '🍊'])
    }

    const eatOrange = () => {
        setOranges(oranges.slice(0, -1))
    }

    return (
        <>
        <h3>Orange Management v2</h3>
        <div style={{ display: 'flex', gap: '1em', justifyContent: 'center', margin: '1rem' }}>
            <p>{oranges.map(l => l)}</p>
            
            <button onClick={addOrange}>Increment</button>
            <button onClick={eatOrange}>Eat</button>
        </div>
        </>
    )
}
