import { useState } from 'react'

export default function Oranges()
{
    const [ oranges, setOranges ] = useState(5);

    const hasBugs = oranges === 'bugs';

    const incrementOranges = () => {
        // Cannot increment if it has bugs.
        if (oranges === 'bugs') return;
        
        // 10% chance of oranges getting bugs.
        if (Math.random() < 0.1) {
            setOranges('bugs')
        }
        else {
            setOranges(oranges + 1)
        }
    }

    const eatOrange = () => {
        // Cannot eat orange if it has bugs.
        if (oranges === 'bugs') return;

        setOranges(oranges - 1)
    }

    const clearOranges = () => {
        setOranges(5)
    }

    const buttonStyles = {
        increment: { backgroundColor: hasBugs ? 'gray' : 'green', color: 'white' },
        eat: { backgroundColor: hasBugs ? 'gray' : 'red', color: 'white' },
        clear: { backgroundColor: hasBugs ? 'blue' : 'gray', color: 'white' },
    };

    return (
        <>
        <h3>Orange Management v1</h3>
        <div style={{ display: 'flex', gap: '1em', justifyContent: 'center', margin: '1rem' }}>
            <p>{ hasBugs ? '🐛🐛🐛' : oranges + ' 🍊' }</p>
            
            <button onClick={incrementOranges} style={buttonStyles.increment} disabled={hasBugs}>Increment</button>
            <button onClick={eatOrange} style={buttonStyles.eat} disabled={hasBugs}>Eat</button>
            <button onClick={clearOranges} style={buttonStyles.clear} disabled={!hasBugs}>Clear</button>
        </div>
        </>
    )
}
