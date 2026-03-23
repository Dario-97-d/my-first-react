export default function CreditCardTypeMasterCard()
{
  const circleStyle = {
    height: '1.25rem',
    width: '1.25rem',
    borderRadius: '50%'
  }

  const labelStyle = {
    color: 'white',
    fontSize: '0.35rem',
    fontStyle: 'italic',
    fontWeight: 'bold',
    lineHeight: '1rem',
    position: 'absolute',
    transform: 'translate(15%, 0.125rem)'
  }

  return (<>
    <div style={{ display: 'flex', position: 'relative' }}>
      <div style={{ ...circleStyle, backgroundColor: 'red', transform: 'translateX(15%)'  }}></div>
      <div style={{ ...circleStyle, backgroundColor: 'orange', transform: 'translateX(-15%)' }}></div>

      <span style={ labelStyle }>MasterCard</span>
    </div>
  </>)
}
