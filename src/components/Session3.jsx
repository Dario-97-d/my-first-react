import ClickablePicture from "./session3/ClickablePicture"
import FruitBasket from "./session3/FruitBasket"
import Oranges from "./session3/Oranges"
import Orangitas from "./session3/Orangitas"

import pic1 from  './../assets/images/chess-1.png'
import pic2 from  './../assets/images/chess-2.png'

export default function Session3()
{
    return (
        <>

        <Oranges />

        <Orangitas />

        <FruitBasket />

        <ClickablePicture img={pic1} imgClicked={pic2} />

        </>
    )
}
