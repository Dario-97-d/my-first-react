function Greeting(props)
{
    const { name } = props

    return name ? <h1>Hello, {name}!</h1> : <h1>Hello!</h1>
}

export default Greeting