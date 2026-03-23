import { useState } from 'react'

export default function ClickablePicture(props)
{
  const { img, imgClicked } = props
  const [isClicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!isClicked)
  }

  const divStyle = {
    margin: '1rem',
    padding: '2rem',
    backgroundColor: 'rgba(255,255,255,0.5)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
  }

  return (<>
    <h2>Clickable Picture</h2>

    <div style={ divStyle }>
      <img
        src={ isClicked ? imgClicked : img }
        onClick={handleClick}
        style={{
          maxHeight: '100%',
          maxWidth: '100%',
          width: '20rem',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          borderRadius: '0.5em',
          cursor: 'pointer'
        }}
      />
    </div>
  </>)
}
