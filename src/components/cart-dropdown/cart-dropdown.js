import React from "react";
import './cart-dropdown.style.scss'
import CustomButton from "../custom-button/custom-button";
import {connect} from 'react-redux'
import CartItem from "../cart-item/cart-item";

const CartDropdown = ({cartItems})=>(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(cartItem=>{
                    return <CartItem key={cartItem.id} item={cartItem} />
                })
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = ({cart:{cartItems}})=>({
    cartItems
})

export default connect(mapStateToProps)(CartDropdown)