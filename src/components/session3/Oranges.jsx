import { useState } from 'react'

export default function Oranges()
{
    const [ oranges, setOranges ] = useState(0);
    const [ eatenOranges, setEatenOranges ] = useState(0);

    const hasBugs = oranges === 'bugs';

    const addOranges = () => {
        // Cannot add if it has bugs.
        if (oranges === 'bugs') return;
        
        // 10% chance of oranges getting bugs.
        if (Math.random() < 0.25) {
            setOranges('bugs')
        }
        else {
            setOranges(oranges + 1)
        }
    }

    const eatOrange = () => {
        // Cannot eat orange if it has bugs.
        if (oranges === 'bugs') return;

        // Cannot eat orange if there ain't any.
        if (oranges === 0) return;

        setOranges(oranges - 1)
        setEatenOranges(eatenOranges + 1)
    }

    const clearOranges = () => {
        setOranges(0)
    }

    const buttonStyles = {
        add: {
            backgroundColor: hasBugs ? 'gray' : 'green',
            color: 'white',
            transition: 'background-color 0.3s ease-in-out'
        },
        eat: {
            backgroundColor: hasBugs || oranges < 1 ? 'gray' : 'red',
            color: 'white',
            transition: 'background-color 0.3s ease-in-out'
        },
        clear: {
            backgroundColor: hasBugs ? 'blue' : 'gray',
            color: 'white',
            transition: 'background-color 0.3s ease-in-out'
        },
    };

    return (<>
        <h3>"Bugless" Oranges</h3>

        <p>{ hasBugs ? '🐛🐛🐛' : oranges + ' 🍊' }</p>

        <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'center', gap: '1rem', margin: '1rem' }}>
            <button onClick={addOranges} style={buttonStyles.add} disabled={hasBugs}>Add</button>
            <button onClick={eatOrange} style={buttonStyles.eat} disabled={ hasBugs || oranges < 1 }>Eat</button>
            <button onClick={clearOranges} style={buttonStyles.clear} disabled={!hasBugs}>Clear</button>
        </div>

        <h4>Eaten oranges: {eatenOranges}</h4>
    </>)
}
