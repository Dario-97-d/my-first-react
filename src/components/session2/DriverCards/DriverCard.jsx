import Rating from '../Ratings/Rating'

export default function DriverCard(props)
{
  const
  {
    name,
    rating,
    img,
    car
  } = props

  const divStyle =
  {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'rgb(71, 95, 191)',
    padding: '1rem',
    borderRadius: '0.5rem',
    margin: '1rem'
  }

  const imgStyle =
  {
    width: '5rem',
    height: '5rem',
    objectFit: 'cover',
    borderRadius: '50%'
  }

  return (<>
    <div style={divStyle}>
      <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center', gap: '1rem'}}>

        <div style={{width: '5rem'}}>
          <img src={img} style={imgStyle} />
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', lineHeight: '1.2'}}>

          <div style={{fontWeight: 'bold', fontSize: '1.25rem'}}>{name}</div>

          <Rating>{rating}</Rating>

          <div style={{fontSize: '0.9em'}}>{car.model} - {car.licensePlate}</div>

        </div>

      </div>
    </div>
  </>)
}
