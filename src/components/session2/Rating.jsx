function Rating({ children })
{
    let result = []

    for (let i = 0; i < 5; i++)
    {
        if (Math.round(children) > i)
        {
            result.push('★')
        }
        else result.push('☆')
    }

    return <div style={{fontSize: '2rem'}}>{result}</div>
}

export default Rating