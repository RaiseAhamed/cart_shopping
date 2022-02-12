import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Link } from 'react-router-dom'
import '../../css/navbar.css';
import shop_card from '../../images/external-shopping-cart.png'

const Navbar = ({ cart }) => {

    const [cartcount, setCartCount] = useState(0)
    useEffect(() => {
        let count = 0;
        cart.forEach((item) => {
            count += item.qty;
        });
        setCartCount(count);
    }, [cart, cartcount])

    return <div className='Navbar__navbar'>
        <Link to="/"><h2 className="Navbar_Home">Home</h2></Link>
        <Link to='/Cart'>
            <div className="Navbar_cart">
                <h3 className="Navbar_cart_title">Cart</h3>

                <img className="Navbar_cart__image" src={shop_card} alt="shopping cart" />
                <div className="Navbar_cart__counter">{cartcount}</div>
            </div>
        </Link>

    </div>;
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
}


export default connect(mapStateToProps)(Navbar);
