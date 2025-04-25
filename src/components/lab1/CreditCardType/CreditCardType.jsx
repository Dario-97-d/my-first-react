import CreditCardTypeMasterCard from "./CreditCardTypeMasterCard"
import CreditCardTypeVisa from "./CreditCardTypeVisa"

function CreditCardType(props)
{
    const { type } = props

    const result = ({
        'Visa': <CreditCardTypeVisa />,
        'Master Card': <CreditCardTypeMasterCard />
    }) [type]

    return result
}

export default CreditCardType