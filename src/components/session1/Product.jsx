import product from '../../assets/product.json'
import Rating from '../session2/Ratings/Rating'
import styles from './Product.module.css'

export default function ProductCard()
{
  const onClickAddToCart = () => {
    alert('Watch for the cart!');
    alert('Just kidding...');
  }

  return (<>
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
            <button className={ styles['btn-add-to-cart'] } onClick={onClickAddToCart}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </>)
}
