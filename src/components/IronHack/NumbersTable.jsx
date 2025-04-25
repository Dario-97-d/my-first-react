import styles from './NumbersTable.module.css'

function NumbersTable(props)
{
    const { limit } = props

    const numbers = Array.from({ length: limit }, (e, i) => i + 1)

    return (
        <div className={ styles['div-table'] }>
            
            {numbers.map(n => <div key={n} className={ styles['div-number'] }>{n}</div>)}

        </div>
    )
}

export default NumbersTable