import IdCard from './lab1/IdCard'
import Greetings from './lab1/Greetings'
import Random from './lab1/Random'
import BoxColor from './lab1/BoxColor'
import CreditCard from './lab1/CreditCard'
import Rating from './lab1/Rating'
import DriverCard from './lab1/DriverCard'
import LikeButton from './lab1/LikeButton'

function Lab1()
{
    return (
    <>
        <IdCard
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1988-05-11")}
            picture="https://randomuser.me/api/portraits/women/44.jpg"
        />
        
        <Greetings lang="de">Ludwig</Greetings>
        <Greetings lang="fr">François</Greetings>

        <Random min={1} max={6} />
        <Random min={1} max={100} />

        <BoxColor r={0} g={127} b={127} />
        <BoxColor r={0} g={127} b={255} />

        <div style={{display: 'flex', width: '100%', justifyContent: 'center'}}>

            <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white"
            />

            <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222"
            />

            <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="BDD"
            owner="Dário Dias"
            bgColor="#ddbb55"
            color="white"
            />

        </div>

        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>

        <DriverCard
            name="Travis Kalanick"
            rating={4.2}
            img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
            car={{
            model: "Toyota Corolla Altis",
            licensePlate: "CO42DE"
            }}
        />

        <DriverCard
            name="Dara Khosrowshahi"
            rating={4.9}
            img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
            car={{
            model: "Audi A3",
            licensePlate: "BE33ER"
            }}
        />

        <LikeButton />
    </>)
}

export default Lab1