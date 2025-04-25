import { useState } from 'react'

function ClickablePicture(props)
{
    const { img, imgClicked } = props
    const [isClicked, setClicked] = useState(false)

    const handleClick = () => {
        setClicked(!isClicked)
    }

    const divStyle = {
        margin: '2rem',
        padding: '2rem',
        backgroundColor: 'rgba(255,255,255,0.5)',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
    }

    return (
        <div style={ divStyle }>
            <img
                src={ isClicked ? imgClicked : img }
                onClick={handleClick}
                style={{
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    borderRadius: '0.5em',
                    cursor: 'pointer'
                }}
            ></img>
        </div>
    )
}

export default ClickablePicture