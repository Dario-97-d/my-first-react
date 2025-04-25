import { useState } from 'react'

import styles from './Products.module.css'
import productsJson from './../data/products.json'

import AddProduct from './products/AddProduct'
import Product from './products/Product'

function Products()
{
    const [products, setProducts] = useState(productsJson)

    const addProduct = (newProduct) => {
        setProducts([...products, {
            ...newProduct,
            id: Math.max(...products.map(p => p.id)) + 1
        }])
    }

    const deleteProduct = (id) => {
        setProducts(products.filter(p => p.id !== id))
    }

    const toggleStock = (id) => {
        setProducts(products.map(p => p.id !== id ? p : { ...p, inStock: !p.inStock }))
    }

    const updateProduct = (updatedProduct) => {
        setProducts(products.map(p => p.id !== updatedProduct.id ? p : {
            ...updatedProduct,
            inStock: p.inStock
        }))
    }

    return (
        <div className={styles['products']}>
            
            <AddProduct addProduct={addProduct} />

            <div className='products'>
                {products.map(p => <Product
                    key={p.id}
                    product={p}
                    deleteProduct={deleteProduct}
                    toggleStock={toggleStock}
                    updateProduct={updateProduct}
                />)}
            </div>

        </div>
    )
}

export default Products