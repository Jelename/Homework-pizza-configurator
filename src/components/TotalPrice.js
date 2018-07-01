import * as React from 'react'
import { connect } from 'react-redux';

class TotalPrice extends React.PureComponent {
  render() {

    const totalPrice = Number(this.props.basePrice) + Number(this.props.saucePrice) + Number(this.props.toppingPrice.length * 0.5);
    const total = Number(totalPrice).toFixed(2);

      
    return (
        <div>
            <h1>Total Price is:</h1>
            <p>{total}</p>
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