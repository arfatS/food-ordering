import React from 'react'
import Item from './Item'
import Bill from './Bill'

import data from './data'
import './css/style.css'


class App extends React.Component {
    constructor(){
        super()
        this.state = {}

        this.handleQuantity = this.handleQuantity.bind(this)
    }

    handleQuantity(e){
        this.setState({[e.target.id] : parseInt(e.target.value)})
    }

    calculateTotal(){
        const selected = []

        data.forEach(item => {
            if(item.id in this.state){
                selected.push(
                    {
                        id : item.id,
                        price : item.price,
                        quantity : this.state[item.id],
                        total :  item.price * this.state[item.id]
                    }
                )
            }
        })

        return selected
    }

    render(){
        return(
            <div>
                {data.map((item) =>
                    <Item key={item.id} value={item} onQuantity={this.handleQuantity}/>
                )}

                <button className="checkout">Checkout</button> 

               
                
                {this.calculateTotal().map((selected) => 
                    <Bill key={selected.id} value={selected} />
                )}
            </div>
            
        )
    }
}

export default App