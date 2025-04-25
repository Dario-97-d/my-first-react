import Dice from './IronHack/Dice'
import Carousel from './IronHack/Carousel'
import NumbersTable from './IronHack/NumbersTable'
import FaceBook from './IronHack/FaceBook'

import diceFace0 from './../assets/images/dice/dice-0.png'
import diceFace1 from './../assets/images/dice/dice-1.png'
import diceFace2 from './../assets/images/dice/dice-2.png'
import diceFace3 from './../assets/images/dice/dice-3.png'
import diceFace4 from './../assets/images/dice/dice-4.png'
import diceFace5 from './../assets/images/dice/dice-5.png'
import diceFace6 from './../assets/images/dice/dice-6.png'

function IronHack()
{
    return (<>
    
    <Dice />

    <Carousel images={[
        diceFace0,
        diceFace1,
        diceFace2,
        diceFace3,
        diceFace4,
        diceFace5,
        diceFace6
    ]} />

    <NumbersTable limit={12} />

    <FaceBook />

    </>)
}

export default IronHack