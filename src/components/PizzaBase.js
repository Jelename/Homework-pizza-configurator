import * as React from 'react'
import { bases } from '../data/pizzaData'
import { connect } from 'react-redux' 
import { chooseBase } from '../actions/actions'

class PizzaBase extends React.PureComponent {
    // propTypes = {  
    //     name: React.PropTypes.string.isRequired,
    //     options: React.PropTypes.array.isRequired,
    //     selectedOption: React.PropTypes.string,
    //     controlFunc: React.PropTypes.func.isRequired,
    //     placeholder: React.PropTypes.string
    //   };

    handleSelect = (e) => {
        this.props.chooseBase(e.target.value);
    }
      
    render() {
        return (
            <div className="selectBase">
                <h2>Choose base:</h2>
                    <select name='base' value={bases.base} className="form-select" onChange={this.handleSelect}>
                        <option value="">Select your favorite base:</option>
                        {bases.map(item => {
                            return (
                                <option
                                    key={item.base}
                                    value={item.base}>{item.base} cm NY Style, price: &euro; {item.price}
                                </option>
                            );
                        })}
                    </select>
            </div>
        )
    }
}

export default connect(null, { chooseBase })(PizzaBase)