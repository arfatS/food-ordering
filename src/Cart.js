import React from 'react'
import data from './data'
import './css/style.css'

class Cart extends React.Component{
    constructor(){
        super()
        this.grandTotal = 0

        this.clearCart = this.clearCart.bind(this)
    }
    getCartData(){
        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

        let cartData = []

        cart.forEach(i => {
            data.forEach(j => {
                if (i.id === j.id) {
                    cartData.push({
                        id : i.id,
                        name : j.name,
                        price : j.price,
                        quantity : i.quantity,
                        total : i.quantity * j.price
                    })
                    this.grandTotal += (i.quantity * j.price)
                }
            })
        })
        
        return cartData
    }
    
    clearCart(){
        localStorage.removeItem('cart')
        window.location.reload()
    }

    render(){
        return(
            <div className="cart">
                {this.getCartData().map(item => {
                    return (
                        <div className="cartItem" key={item.id}>
                            <h1>{item.name}</h1>
                            <p>Price : {item.price}  Quantity : {item.quantity}</p>
                            <p>Total : {item.total}</p>
                        </div>
                    )
                })}
                <hr />
                <h1>GrandTotal : {this.grandTotal}/-</h1>
                <button className="clearCart" onClick={this.clearCart}>Clear Cart</button>
            </div>
        )
    }
}

export default Cart