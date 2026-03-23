import { useState, useEffect } from 'react'

import styles from './Products.module.css'
import productsJson from './../data/products.json'

import AddProduct from './products/AddProduct'
import Product from './products/Product'

const STORAGE_KEY = 'products'

export default function Products()
{
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : productsJson
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products))
  }, [products])

  const addProduct = (newProduct) => {
    setProducts([...products, {
      ...newProduct,
      id: products.length ? Math.max(...products.map(p => p.id)) + 1 : 1
    }])
  }

  const deleteProduct = (product) => {
    if (confirm(`Delete ${product.name}?`)) {
      setProducts(products.filter(p => p.id !== product.id))
    }
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

  const resetProducts = () => {
    localStorage.removeItem(STORAGE_KEY)
    setProducts(productsJson)
  }

  return (<>
    <div className={styles['product-store']}>

      <AddProduct addProduct={addProduct} />

      <div className={styles['products']}>
        {products.map(p => <Product
          key={p.id}
          product={p}
          deleteProduct={deleteProduct}
          toggleStock={toggleStock}
          updateProduct={updateProduct}
        />)}
      </div>

      <button onClick={resetProducts}>Reset</button>

    </div>
  </>)
}
