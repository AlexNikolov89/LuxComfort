import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './Cartpage.css'

const Cartpage = () => {
    const [quantity, setQuantity] = useState(1)

    const addToCartReducer = useSelector(state => state.addToCartReducer)
    const {cartItems} = addToCartReducer;
    //console.log("🚀 ~ file: Cartpage.js ~ line 8 ~ Cartpage ~ cartItems", cartItems)
    return (
        <div className='cartpage_container'>
            <div className="cartpage_title">
                {cartItems.length < 0 ? <h1>Your Cart is Empty</h1> : <h1>You have {cartItems.length} item(s) in cart</h1>}
                
            </div>

            <div className="cartpage_info_wrapper">

            <div className="cartpage_leftside">
            {cartItems.length > 0 && cartItems.map(item => (
                    <div className="cartpage_item">
                        <div className="cartpage_image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="cartpage_info">
                            <h3>{item.name}</h3>
                            <p>Price: CHF {item.price}</p>
                            Stock:{' '}
                            <select className='addtocart_select' value={quantity} onChange={e => setQuantity(e.target.value)}>
                                    {[...Array(item.countInStock).keys()].map(x => {
                                        return <option key={x+1} value={x + 1}>{x + 1}</option>
                                    })}
                                </select>
                        </div>

                        <div className="cartpage_remove">
                            <p>Remove Item <i className="fas fa-times"></i></p>
                        </div>

                    </div>
            ))}
           </div>

           <div className="cartpage_rightside">
               <div className="cartpage_total">
                    <h3>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</h3>
                    <h3>CHF {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</h3>
               </div>
                <h3>Delivery: FREE</h3>
               <div className="cartpage_total">
                    <h3>Total</h3>
                    <h3>CHF {cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0).toFixed(2)}</h3>
               </div>
           </div>
           
           </div>
        </div>
    )
}

export default Cartpage
