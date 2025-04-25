import ClickablePicture from "./aula3/ClickablePicture"
import Frutas from "./aula3/Frutas"
import Laranjas from "./aula3/Laranjas"
import Laranjolas from "./aula3/Laranjolas"

import pic1 from  './../assets/images/xadrez1.png'
import pic2 from  './../assets/images/xadrez2.png'

function Aula3()
{
    return (
        <>

        <Laranjas />

        <Laranjolas />

        <Frutas />

        <ClickablePicture img={pic1} imgClicked={pic2} />

        </>
    )
}

export default Aula3