import product from '../../assets/product.json'
import Rating from '../lab1/Rating'
import styles from './Product.module.css'

const ProductCard = () => {

    return (
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            <div className={ styles['card-background'] }>
                <div className={ styles['product-card'] }>
                    <div className={ styles['upper-card'] }>
                        
                        <div className={ styles['product-image'] }>
                            <img src={product.image} />
                        </div>

                        <div className={ styles['product-name'] }>
                            <span>{product.name}</span>
                        </div>
                        
                        <div className={ styles['product-description'] }>
                            <span>{product.description}</span>
                        </div>
                        
                        <div className={ styles['product-price'] }>
                            <span>${product.price}</span>
                        </div>
                        
                        <div className={ styles['product-score'] }>
                            <Rating>3</Rating>
                        </div>

                    </div>

                    <div className={ styles['lower-card'] }>
                        <button className={ styles['btn-add-to-cart'] }>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ProductCard
