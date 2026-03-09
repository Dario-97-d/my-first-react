function Greeting(props)
{
    const { name } = props

    return name ? <h2>Hello, {name}!</h2> : <h2>Hello!</h2>
}

export default Greeting