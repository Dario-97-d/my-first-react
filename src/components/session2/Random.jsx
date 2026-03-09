const inputStyle =
{
  width: '4rem'
}

function Random()
{
    const generate = () => {
      const number1 = document.getElementById('number-1').value
      const number2 = document.getElementById('number-2').value

      const [min, max] =
      [
        Math.min(number1, number2),
        Math.max(number1, number2)
      ]

      document.getElementById('number-target').innerText = Math.round( Math.random() * (max - min) + min )
    }

    return (<>
      <h3>Random number generator</h3>

      <div style={{ display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', margin: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          Min: <input type="number" id="number-1" style={inputStyle} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
          Max: <input type="number" id="number-2" style={inputStyle} />
        </div>

        <button onClick={generate} style={{ margin: '0 0.5rem' }}>Go!</button>

        <span id="number-target"></span>
      </div>
    </>)
}

export default Random