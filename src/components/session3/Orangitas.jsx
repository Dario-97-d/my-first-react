import { useState } from 'react'

export default function Orangitas()
{
  const [oranges, setOranges] = useState(['🍊', '🍊'])

  const addOrange = () => {
    setOranges([...oranges, '🍊'])
  }

  const eatOrange = () => {
    setOranges(oranges.slice(0, -1))
  }

  return (<>
    <h3>Oranges</h3>

    <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem', margin: '1rem' }}>
      <button onClick={addOrange}>Add</button>
      <p>{oranges.map(l => l)}</p>
      <button onClick={eatOrange}>Eat</button>
    </div>
  </>)
}
