function BoxColor(props)
{
    const { r, g, b } = props
    const rgbDec = `rgb(${r},${g},${b})`
    const rgbHex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`

    const divStyle = {
        width: '50rem',
        height: '10rem',
        margin: '1rem auto',
        backgroundColor: rgbDec,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '0.25rem solid white',
        fontSize: '2rem'
    }

    return (
        <div style={divStyle}>
            <div>{rgbDec}</div>
            <div>{rgbHex}</div>
        </div>
    )
}

export default BoxColor