function ProductDisplay(props)
{
    const { product: {
        name,
        price,
        category
    } } = props

    return (<>

    <h3 className='name'>{name}</h3>
    <h3 className='price'>{price}</h3>
    <h3 className='category'>{category}</h3>
    
    </>)
}

export default ProductDisplay