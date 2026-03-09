import { useState } from 'react'

import ProductDisplay from './ProductDisplay'
import ProductInput from './ProductInput'

import styles from '.././Products.module.css'

function Product(props)
{
    const { product, deleteProduct, toggleStock, updateProduct } = props
    
    const [isEditing, setEditing] = useState(false)

    const handleSave = (updatedProduct) => {
        updateProduct(updatedProduct)
        setEditing(false)
    }

    return (<>
        <div className={`${styles.product} ${product.inStock ? styles['in-stock'] : styles['out-of-stock']}`}>
            <div style={{ flex: '1' }}>
                {isEditing ?
                    <ProductInput product={product} onSave={handleSave} cancelEdit={() => setEditing(false)} />
                    :
                    <ProductDisplay product={product} />}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
                {!isEditing &&
                    <button onClick={() => setEditing(true)} style={{ backgroundColor: 'darkblue' }}>
                        Edit
                    </button>
                }

                <div style={{ display: 'flex', flexFlow: 'row wrap', gap: '1rem' }}>
                    <button style={{ flex: '1', backgroundColor: product.inStock ? '#007f00' : '#3f3f3f' }} onClick={() => toggleStock(product.id)}>
                        {product.inStock ? 'In' : 'No'} Stock
                    </button>
                
                    <button style={{ flex: '1', backgroundColor: '#7f0000' }} onClick={() => deleteProduct(product.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    </>)
}

export default Product