import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactStarsRating from 'react-awesome-stars-rating';
import { removeFromCart, adjustItemQty } from '../../../redux/shopping/shopping-actions'
import '../../../css/cart.css';
import trash from '../../../images/trash.png';


const CartItem = ({ item, removeFromCart, adjustItemQty }) => {
    const [input, setInput] = useState(item.qty);
    const [ratingvalue, setRatingValue] = useState(0)
    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustItemQty(item.id, e.target.value);

    };
    const onChange = (value) => {
        setRatingValue(value)
        // console.log(`React Stars Rating value is ${value}`);
    };
    return (
        <div className='cartItem'>
            <img
                className='cartItem__image'
                src={item.image}
                alt={item.title}
            />
            <div className='cartItem__details'>
                <p className='details__title'>{item.title}</p>
                <p className='details__desc'>{item.description}</p>
                <p className='details__price'>$ {item.price}</p>
                <ReactStarsRating onChange={onChange} value={ratingvalue} />
            </div>
            <div className='cartItem__actions'>
                <div className='cartItem__qty'>
                    <label htmlFor="qty">Qty</label>
                    <input
                        min="1"
                        type="number"
                        id="qty"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                    />
                </div>
                <button
                    onClick={() => removeFromCart(item.id)}
                    className='actions__deleteItemBtn'
                >
                    <img
                        src={trash}
                        alt=""
                    />
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => dispatch(removeFromCart(id)),
        adjustItemQty: (id, value) => dispatch(adjustItemQty(id, value))
    }
}


export default connect(null, mapDispatchToProps)(CartItem)
