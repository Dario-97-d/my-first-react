import ClickablePicture from "./session3/ClickablePicture"
import FruitBasket from "./session3/FruitBasket"
import Oranges from "./session3/Oranges"
import Orangitas from "./session3/Orangitas"

import pic1 from  './../assets/images/clickable-picture/pic-1.jpg'
import pic2 from  './../assets/images/clickable-picture/pic-2.jpg'

export default function Session3()
{
  return (<>

    <Orangitas />

    <Oranges />

    <FruitBasket />

    <ClickablePicture img={pic1} imgClicked={pic2} />

  </>)
}
