import styles from './CreditCard.module.css'
import CreditCardType from './CreditCardType/CreditCardType'

function CreditCard(props)
{
    const
    {
        type,
        number,
        expirationMonth,
        expirationYear,
        bank,
        owner,
        bgColor,
        color
    } = props

    const expiryDate = `${String(expirationMonth).padStart(2, '0')}/${String(expirationYear).slice(-2)}`

    return (
        <div className={ styles.container } style={ { backgroundColor: `${bgColor}`, color: `${color}` } }>
            
            <div className={ styles['card-type'] }>
                <CreditCardType type={type} />
            </div>
            
            <div className={ styles['card-number'] }>
                <span>••••</span>
                <span>••••</span>
                <span>••••</span>
                <span>{number.slice(-4)}</span>
            </div>
            
            <div className={ styles['card-info'] }>
                
                <div style={{display: 'flex', gap: '0.5rem'}}>
                    
                    <span>Expires {expiryDate}</span>
                    
                    <span>{bank}</span>

                </div>

                <div>{owner}</div>

            </div>

        </div>
    )
}

export default CreditCard