import { useState } from 'react'

import diceFace0 from './../../assets/images/dice/dice-0.png'
import diceFace1 from './../../assets/images/dice/dice-1.png'
import diceFace2 from './../../assets/images/dice/dice-2.png'
import diceFace3 from './../../assets/images/dice/dice-3.png'
import diceFace4 from './../../assets/images/dice/dice-4.png'
import diceFace5 from './../../assets/images/dice/dice-5.png'
import diceFace6 from './../../assets/images/dice/dice-6.png'

export default function Dice()
{
  const diceFaces = [
    diceFace1,
    diceFace2,
    diceFace3,
    diceFace4,
    diceFace5,
    diceFace6
  ]

  const getRandomDiceFace = () => diceFaces[Math.floor(Math.random() * 6)]

  const [currentDiceFace, setDiceFace] = useState(getRandomDiceFace())
  const [isDisabled, setDisabled] = useState(false)

  const handleClick = () => {
    if (isDisabled) return

    setDisabled(true)
    setDiceFace(diceFace0)

    setTimeout(() => {
      setDiceFace(getRandomDiceFace())
      setDisabled(false)
    }, 500)
  }

  return (<>
    <h3>Random Dice Face</h3>

    <img
      src={currentDiceFace}
      onClick={handleClick}
      style={{
        margin: '1rem',
        height: '10rem',
        width: '10rem',
        cursor: isDisabled ? 'default' : 'pointer' }}
      disabled={isDisabled}
    />
  </>)
}
