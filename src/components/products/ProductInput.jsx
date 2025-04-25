import { useState } from 'react'
import styles from './ProductInput.module.css'

function ProductInput(props)
{
    const {
        product: {
            id,
            name,
            price,
            category
        },
        onSave,
        cancelEdit
    } = props

    const [editName, setEditName] = useState(name)
    const [editPrice, setEditPrice] = useState(price)
    const [editCategory, setEditCategory] = useState(category)

    const handleSubmit = (e) => {
        e.preventDefault()
        onSave({
            id,
            name: editName,
            price: editPrice,
            category: editCategory
        })
    }

    return (<>
    
        <form onSubmit={handleSubmit} className={styles['form-edit-product']}>
            <input onChange={(e) => setEditName(e.target.value)} type='text' name='name' value={editName} />

            <input onChange={(e) => setEditPrice(e.target.value)} type='number' name='price' value={editPrice} />

            <input onChange={(e) => setEditCategory(e.target.value)} type='text' name='category' value={editCategory} />

            <div className={styles['buttons']}>
                <button type="submit" style={{ backgroundColor: 'blue', flex: '1' }}>
                    Save
                </button>

                <button onClick={cancelEdit}>❌</button>
            </div>
        </form>
    
    </>)
}

export default ProductInput