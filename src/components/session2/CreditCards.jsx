import CreditCard from './CreditCards/CreditCard'

export default function CreditCards()
{
  return (<>
    <h3>Credit Cards</h3>

    <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'center'}}>

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
  </>)
}