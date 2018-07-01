import * as React from 'react'
import { bases } from '../data/pizzaData'
import { connect } from 'react-redux' 
import { chooseBase } from '../actions/actions'

class PizzaBase extends React.PureComponent {
    handleSelect = (e) => {
        this.props.chooseBase(e.target.value);
    }
      
    render() {
        return (
            <div className="selectBase">
                <h2>Choose base:</h2>
                    <select name='base' value={bases.name} className="form-select" onChange={this.handleSelect}>
                        <option value="">Select your favorite base:</option>
                        {bases.map(item => {
                            return (
                                <option
                                    key={item.name}
                                    value={item.price}>{item.name} cm NY Style, price: &euro; {item.price}
                                </option>
                            );
                        })}
                    </select>
            </div>
        )
    }
}

export default connect(null, { chooseBase })(PizzaBase)