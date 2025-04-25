function CreditCardTypeMasterCard()
{
    const circleStyle = {
        height: '1.25em',
        width: '1.25em',
        borderRadius: '50%'
    }

    const labelStyle = {
        color: 'white',
        fontSize: '0.35em',
        fontStyle: 'italic',
        fontWeight: 'bold',
        lineHeight: '1em',
        position: 'absolute',
        transform: 'translate(-50%, -2.15em)'
    }

    return (
        <>

        <div style={{ display: 'flex', position: 'relative' }}>
            <div style={{ ...circleStyle, backgroundColor: 'red', transform: 'translateX(15%)'  }}></div>
            <div style={{ ...circleStyle, backgroundColor: 'orange', transform: 'translateX(-15%)' }}></div>
        </div>

        <span style={ labelStyle }>MasterCard</span>

        </>
    )
}

export default CreditCardTypeMasterCard