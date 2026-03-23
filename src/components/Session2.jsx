import IdCards from './session2/IdCards'
import Greetings from './session2/Greetings'
import Random from './session2/Random'
import ColorBoxes from './session2/ColorBoxes'
import CreditCards from './session2/CreditCards'
import Ratings from './session2/Ratings'
import DriverCards from './session2/DriverCards'
import LikeButton from './session2/LikeButton'

export default function Session2()
{
  return (<>

    <Random />

    <IdCards />

    <Greetings lang="de">Ludwig</Greetings>

    <ColorBoxes />

    <CreditCards />

    <Ratings />

    <DriverCards />

    <LikeButton />

  </>)
}
