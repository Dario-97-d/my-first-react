import {useState} from 'react'

export default function FruitBasket()
{
    const fruitKinds = ['🍊','🍎','🍐','🍍','🍉','🍇']
    
    const randomFruitKind = () => fruitKinds[Math.floor(Math.random() * fruitKinds.length)]

    const [fruits, setFruits] = useState([
        {
            id: Date.now(),
            kind: randomFruitKind()
        }
    ])

    const addFruit = () => {
        setFruits([...fruits, {
            id: Date.now(),
            kind: randomFruitKind()
        }])
    }

    const eatFruit = () => {
        setFruits(fruits.slice(0, -1))
    }

    const clearFruits = () => {
        setFruits([])
    }

    const switchFruit = (id) => {
        setFruits(fruits.map(f => 
            f.id === id ? { ...f, kind: randomFruitKind() } : f
        ))
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem' }}>
            <div style={{ fontSize: '1.5em', fontWeight: 'bold' }}>Fruit Basket</div>

            <div style={{ margin: '1rem', width: '20rem', flexWrap: 'wrap', display: 'flex', gap: '1em', justifyContent: 'center' }}>
                {fruits.map(f => (
                    <button key={f.id} onClick={() => switchFruit(f.id)}>
                        {f.kind}
                    </button>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
                <button onClick={addFruit}>Add</button>
                <button onClick={eatFruit}>Eat</button>
                <button onClick={clearFruits}>Clear</button>
            </div>
        </div>
    )
}
