import React from 'react';
import { connect } from 'react-redux';
import '../../../css/products.css';
import { addToCart } from '../../../redux/shopping/shopping-actions'


const Product = ({ product, addToCart }) => {

    return (
        <div className='product'>
            <img
                className='product__image'
                src={product.image}
                alt={product.title}
            />

            <div className='product__details'>
                <p className='details__title'>{product.title}</p>
                <p className='details__desc'>{product.description}</p>
                <p className='details__price'>$ {product.price}</p>
            </div>
            <div className='product__buttons'>

                <button
                    onClick={() => addToCart(product.id)}
                    className='buttons__btn buttons__add'
                >
                    Add To Cart
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }

}

export default connect(null, mapDispatchToProps)(Product);
