import * as React from 'react'
import { connect } from 'react-redux'

class TotalPrice extends React.PureComponent {
    
    getTotalPrice() {
        const totalPrice = Number(this.props.basePrice) + Number(this.props.saucePrice) + Number(this.props.toppingPrice.length * 0.5);
        const total = Number(totalPrice).toFixed(2);
        return total;
    }

    // handleChange = (e) = {
    //     if (e.target.checked) {
    //         this.getTotalPrice
    //     }
    // }

    render() {
        // const totalPrice = Number(this.props.basePrice) + Number(this.props.saucePrice) + Number(this.props.toppingPrice.length * 0.5);
        // const total = Number(totalPrice).toFixed(2);

        return (
            <div>
                <h1>Total Price is:</h1>
                <h2>{this.getTotalPrice()}</h2>
                <h4>Would you like to have a turbo-drone delivery?</h4>
                <p>That is additional 10% on top of your pizza price.</p>
                <input
                    name='turbo-drone'
                    type='checkbox'
                    //checked={}
                    onChange={this.handleChange}
                /> Add turbo-drone delivery
                {/* <p>New adjusted price is: {this.dronePrice()}</p> */}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        basePrice: state.chooseBase,
        saucePrice: state.chooseSauce,
        toppingPrice: state.chooseTopping
    }
}

export default connect(mapStateToProps)(TotalPrice)