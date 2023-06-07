import React from 'react'
import { useCart } from '../../contexts/CartContext';
import './styles.css'

function CheckoutComp() {
    const { stateCart, dispatchCart } = useCart();

    const finalPrice = stateCart.myCart.reduce(
        (acc, curr) => (acc += curr.originalPrice * curr.qty),
        0
    );
    const Discount = stateCart.myCart.reduce(
        (acc, curr) => (acc += ((curr.originalPrice - curr.price) * curr.qty)),
        0
    );
    const total = finalPrice - Discount;
    return (
        <div>
            <div className="checkout-page-details">
                <div className="cart-summary">
                    <h2 className="cart-summary-title">Order Summary</h2>
                    {stateCart.myCart.map(item => <div className='cart-summary-item-list'><p>{item.name} ({item.qty})</p> <p>{item.price * item.qty}</p></div>)}
                    <div className="cart-summary-item-container">
                        <hr></hr>
                        <div className="cart-summary-item">
                            <p>Price ({stateCart.myCart.reduce((acc, cv) => acc + cv.qty, 0)} items)</p>
                            <p>₹{finalPrice}</p>
                        </div>
                        <div className="cart-summary-item">
                            <p>Discount</p>
                            <p>₹{Discount}</p>
                        </div>
                        <div className="cart-summary-item delivery">
                            <p>Delivery Charges</p>
                            <p>Free</p>
                        </div>

                        <hr></hr>
                        <div className="cart-summary-item amount">
                            <p>Total Amount</p>
                            <p>₹ {total}</p>
                        </div>
                        <p className="cart-summary-savings">You Saved ₹ {Discount} on this order </p>
                        <button>Place Order</button>
                    </div>


                </div>
            </div>








        </div>
    )
}

export default CheckoutComp