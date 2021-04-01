import React from 'react'
import Item from './Item'

import data from './data'
import './css/style.css'


class App extends React.Component {
    constructor(){
        super()
        this.state = {
            quantities : {},
            cart : []
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

        let cart = this.state.cart
        if(!cart.includes(id)){
            cart.push(id)
        }

        this.setState({cart})
    }

    render(){
        return(
            <div>
                {data.map((item) =>
                    <Item key={item.id} value={item} onQuantity={this.handleQuantity} onAddToCart={this.handleAddToCart}/>
                )}

                <button className="checkout">Checkout {this.state.cart.length}</button> 
            </div>
            
        )
    }
}

export default App