import React, { useState } from 'react'
import { useCart } from '../../contexts/CartContext';
import './styles.css'
import AddressModel from '../AdressModel/AddressModel';
import { toast } from 'react-toastify';

function CheckoutComp() {
    const [showAddressModel, setShowAddressModel] = useState(false);
    const localAddress = JSON.parse(localStorage.getItem("userAddress"));
    const [selectedAddress, setSelectedAddress] = useState({});
    const setaddress = localAddress ? localAddress : []
    const [address, setAddress] = useState(setaddress);


    const { stateCart } = useCart();

    const finalPrice = stateCart.myCart.reduce(
        (acc, curr) => (acc += curr.originalPrice * curr.qty),
        0
    );
    const Discount = stateCart.myCart.reduce(
        (acc, curr) => (acc += ((curr.originalPrice - curr.price) * curr.qty)),
        0
    );
    const total = finalPrice - Discount;
    const HandleOrder =()=>
    {
        if(Object.keys(selectedAddress).length)
        toast.success("Order Placed", {
            position: "bottom-center",
            autoClose: 2000,
          });
        else{
            toast.error("Please Select Address", {
                position: "bottom-center",
                autoClose: 2000,
              });
        }
    }

    // console.log( ?"yes":"no")
    return (
        <div style={{ minHeight: "30rem" }}>
            <div className='checkout-page-container'>
                <div className='display-addresses'>
                    <h2 style={{ fontSize: "3rem" }}>Saved Addresses</h2>
                    {address &&
                        address.map(item => <div className="checkout-address-card" key={item.tempName} onClick={()=>setSelectedAddress(item)}>
                            <p id="address-card-name">{item.tempName}</p>
                            <p>{item.tempAddress}, {item.tempCity}, {item.tempState}, {item.tempCountry}, {item.tempPincode}</p>
                            <p>Phone:{item.tempPhoneNo}</p>

                        </div>
                        )
                    }
                    <button id="address-card-add-button" onClick={() => setShowAddressModel(true)}>Add New Address</button>
                    {showAddressModel && <AddressModel showAddressModel={showAddressModel} onClose={() => setShowAddressModel(false)} address={address} setAddress={setAddress} />}
                </div>
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
                            <hr></hr>
                            <div className="cart-summary-address">
                                <p className='cart-summary-address-header'>Delivery Address:</p>
                                {Object.keys(selectedAddress).length ?
                                <div>
                                <p className="cart-summary-address-name">{selectedAddress?.tempName}</p>
                                <p>{selectedAddress?.tempAddress}, {selectedAddress?.tempCity}, {selectedAddress?.tempState}, {selectedAddress?.tempCountry}, {selectedAddress?.tempPincode}</p>
                                <p>Phone:{selectedAddress?.tempPhoneNo}</p>
                                </div>:<div></div>}
                            </div>
                            <p className="cart-summary-savings">You Saved ₹ {Discount} on this order </p>
                            <button className="order-button" onClick={HandleOrder}>Place Order</button>
                        </div>


                    </div>
                </div>







            </div>
        </div>
    )
}

export default CheckoutComp