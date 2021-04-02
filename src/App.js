import React from 'react'
import Item from './Item'
import data from './data'
import './css/style.css'

import {Link} from 'react-router-dom'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            quantities : {},
            cart : 0
        }

        this.handleQuantity = this.handleQuantity.bind(this)
        this.handleAddToCart = this.handleAddToCart.bind(this)
    }

    handleQuantity(id, e){
        let quantities = this.state.quantities
        quantities[id] = parseInt(e.target.value)
        this.setState({quantities})
    }

    handleAddToCart(id){
        if (!this.state.quantities[id]) {
            return alert('Please select quantity')
        }

        // let cart = this.state.cart
        // if(!cart.includes(id)){
        //     cart.push(id)
        // }
        // this.setState({cart})

        let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        
        let checkInCart = false
        cart.forEach(item => {
            if (item.id === id) {
                checkInCart = true
            }
        })
        
        if(!checkInCart){
            cart.push({id, quantity : this.state.quantities[id]})
            alert(`Item No.${id} added to cart - Quantity ${this.state.quantities[id]}`)
        }
        localStorage.setItem('cart', JSON.stringify(cart))
        
        this.setState({
            cart : cart.length
        })
    }

    render(){
        return(
            <div>
                {data.map((item) =>
                    <Item key={item.id} value={item} onQuantity={this.handleQuantity} onAddToCart={this.handleAddToCart}/>
                )}

                <Link to="/cart" className="checkout">Checkout {this.state.cart}</Link> 
            </div>
        )
    }
}

export default App