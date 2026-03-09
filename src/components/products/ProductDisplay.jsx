import styles from '.././Products.module.css'

function ProductDisplay(props)
{
    const { product: {
        name,
        price,
        category
    } } = props

    return (<>

        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h4 className={styles['name']} style={{ flex: '1', display: 'flex', alignItems: 'center' }}>{name}</h4>
            <h4 className={styles['price']}>{price}</h4>
            <h4 className={styles['category']}>{category}</h4>
        </div>
    
    </>)
}

export default ProductDisplay