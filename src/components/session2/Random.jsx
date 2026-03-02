function Random(props)
{
    const { min, max } = props
    const result = Math.random() * (max - min) + min

    return <h2>Random value between {min} and {max}: {Math.round(result)}</h2>
}

export default Random