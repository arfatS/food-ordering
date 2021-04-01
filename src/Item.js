import React from 'react'
import './css/style.css'

class Item extends React.Component {

    render(){
        return (
            <div className="item">
                <h1>{this.props.value.id}. {this.props.value.name}</h1>
                <p>Price : {this.props.value.price}/-</p>

                <input className="quantity" type="number"
                onChange={(e) => this.props.onQuantity(this.props.value.id, e)} 
                min="0" placeholder="Quantity"/>

                <button className="addToCart" id="addToCart" onClick={(e) => this.props.onAddToCart(this.props.value.id, e)}>Add to Cart</button>

                <hr />
            </div>
        )
    }
}

export default Item