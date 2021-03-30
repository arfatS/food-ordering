import React from 'react';
import react from 'react'

class Bill extends React.Component{

    render(){
        return(
            <div>
                <h2>Item Id : {this.props.value.id} Price : {this.props.value.price} 
                    Quantity : {this.props.value.quantity} Total : {this.props.value.total}
                </h2>
            </div>
        )
    }
}

export default Bill