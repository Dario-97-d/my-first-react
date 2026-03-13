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

    const randomizeAll = () => {
        setFruits(fruits.map(f => ({
            ...f,
            kind: randomFruitKind()
        })))
    }

    const switchFruit = (id) => {
        setFruits(fruits.map(f => {
            if (f.id !== id) return f

            let newFruitKind = randomFruitKind()
            while (newFruitKind === f.kind) {
              newFruitKind = randomFruitKind()
            }

            return { ...f, kind: newFruitKind }
        }))
    }

    const areThereFruits = fruits.length > 0

    const buttonStyles = {
        fruit: {
            backgroundColor: 'rgba(0,127,255,0.75)',
            transition: 'background-color 1s ease'
        },
        add: {
            backgroundColor: 'green',
            color: 'white',
            transition: 'background-color 0.3s ease-in-out'
        },
        eat: {
            backgroundColor: areThereFruits ? 'red' : 'gray',
            color: 'white',
            transition: 'background-color 0.3s ease-in-out'
        }
    }

    const fruitButtonHover = (btnId) => {
      document.getElementById(btnId).style.backgroundColor = 'rgba(0,127,255,0.5)'
    }

    const fruitButtonUnhover = (btnId) => {
      document.getElementById(btnId).style.backgroundColor = 'rgba(0,127,255,0.75)'
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', margin: '2rem' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Random Fruits</div>

            <div style={{ width: '20rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                {fruits.map(f => (
                    <button
                        key={f.id}
                        id={f.id}
                        style={buttonStyles.fruit}
                        onClick={() => switchFruit(f.id)}
                        onMouseOver={() => fruitButtonHover(f.id)}
                        onMouseLeave={() => fruitButtonUnhover(f.id)}
                    >
                        {f.kind}
                    </button>
                ))}
            </div>

            <div style={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
                <button onClick={addFruit} style={buttonStyles.add}>Add</button>
                <button onClick={eatFruit} style={buttonStyles.eat} disabled={!areThereFruits}>Eat</button>
            </div>
            
            <button onClick={randomizeAll}>Randomize All</button>
        </div>
    )
}
