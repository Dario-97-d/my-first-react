import { useState } from "react";
import styles from './AddProduct.module.css'

export default function AddProduct({ addProduct })
{
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.target).entries())

        if (!values.name || !values.category || !values.price)
        {
            setMessage('The fields Name, Category and Price are required.')
            setTimeout(() => setMessage(''), 3000)
            return
        }

        addProduct({
            name: values.name,
            category: values.category,
            price: values.price,
            inStock: values.inStock,
        })

        e.target.reset()
        
        setMessage('Added product!')
        setTimeout(() => setMessage(''), 3000)
    }

    return (<>
    
        <h2>New Product</h2>

        <form onSubmit={handleSubmit} className={styles['form-new-product']}>

            <div style={{ display: 'contents' }}>
                <label htmlFor='name'>Name</label>
                <input type="text" id='name' name="name" />
            </div>

            <div style={{ display: 'contents' }}>
                <label htmlFor='category'>Category</label>
                <input type="text" id='category' name="category" />
            </div>

            <div style={{ display: 'contents' }}>
                <label htmlFor='price'>Price</label>
                <input type="number" id='price' name="price" />
            </div>

            <div style={{ display: 'contents' }}>
                <label htmlFor='inStock'>In stock</label>
                <input type="checkbox" id='inStock' name="inStock" />
            </div>

            <div style={{ gridColumn: '1 / span 2' }}>
                {message}
            </div>

            <button type='submit' style={{ gridColumn: '1 / span 2' }}>Add</button>

        </form>

    </>)
}