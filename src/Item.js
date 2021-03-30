import React from 'react'
import './css/style.css'

class Item extends React.Component {
   
    render(){
        return (
            <div className="item">
                <h1>{this.props.value.id}. {this.props.value.name}</h1>
                <p>Price : {this.props.value.price}</p>

                <input type="number" id={this.props.value.id} onChange={this.props.onQuantity} min="0" placeholder="Quantity"/>

                <hr />
            </div>
        )
    }
}

export default Item