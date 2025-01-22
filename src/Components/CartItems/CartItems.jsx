import React, { useContext } from 'react'
import '../CartItems/CartItem.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext)
  return (
    <div className='cartItems'>
        <div className="cartItem-format-main">
      <p>Products</p>
      <p>Title</p>
      <p>Price</p>
      <p>Quantity</p>
      <p>Total</p>
      <p>Remove</p>
    </div>
    <hr />
    
   {all_product.map((e)=>{
      if(cartItems[e.id]>0){
        
            return <div>
               <div className="cartItem-format cartItem-format-main">
                <img src={e.image} alt=""  className='cartIcon-product-icon'/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartItem-quantity'>{cartItems[e.id]}</button>
                <p>${e.new_price*cartItems[e.id]}</p>
                <img  className='cartItem-remove-icon'src={remove_icon}  onClick= {()=>{removeFromCart(e.id)}}alt="" />
            </div>
            <hr/>
        </div>
    
        }
        return null;
    })}
<div className='cartItem-down'>
<div className="cartItem-total">
<h1>Cart Total</h1>
<div>
<div className="cartItem-total-item">
    <p>Subtotal</p>
    <p>${getTotalCartAmount()}</p>
</div>
<hr />
<div className="cartItem-total-item">
    <p>Shipping Fee</p>
    <p>Free</p>
</div>
<hr />
<div className="cartItem-total-item">
    <h3>Total</h3>
    <h3>${getTotalCartAmount()}</h3>
</div>
</div>
<button>PROCEED TO CHECKOUT</button>
</div>
<div className="cartItem-promocode">
    <p> Have promo code ,Enter it here</p>
    <div className="cartItem-promo-box">
        <input type="text" placeholder='Promo code' />
        <button>Submit</button>
    </div>
</div>
</div>
  </div>
  )
}


export default CartItems
