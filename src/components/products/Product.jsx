import { useState } from 'react'

import ProductDisplay from './ProductDisplay'
import ProductInput from './ProductInput'

function Product(props)
{
    const { product, deleteProduct, toggleStock, updateProduct } = props
    
    const [isEditing, setEditing] = useState(false)

    const handleSave = (updatedProduct) => {
        updateProduct(updatedProduct)
        setEditing(false)
    }

    return (
        <div className="product">
            {isEditing ?
            <ProductInput product={product} onSave={handleSave} cancelEdit={() => setEditing(false)} />
            :
            <ProductDisplay product={product} />}

            {!isEditing &&
            <button onClick={() => setEditing(true)} style={{ backgroundColor: 'darkblue', width: 'calc(100% - 2rem)' }}>
                Edit
            </button>
            }

            <div style={{ display: 'flex', gap: '1rem', margin: '1rem' }}>
                <button style={{ backgroundColor: product.inStock ? '#007f00' : '#3f3f3f' }} onClick={() => toggleStock(product.id)}>
                    {product.inStock ? 'In' : 'No'} Stock
                </button>
                
                <button className='delete' onClick={() => deleteProduct(product.id)}>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Product