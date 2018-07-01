import * as React from 'react'
import { sauces } from '../data/pizzaData'
import { connect } from 'react-redux' 
import { chooseSauce } from '../actions/actions'

class PizzaSauce extends React.PureComponent {

    handleChange = (e) => {
        console.log(e.target.value);
        this.props.chooseSauce(e.target.value);
    }
      
    render() {
        return (
            <div>
                <h2>Select your favorite sauce</h2>
                <div className="checkbox-group">
                    {sauces.map(sauce => {
                        return (
                            <label key={sauce.name} className="form-label capitalize">
                                <input
                                    name='sauce'
                                    type='radio'
                                    className="form-checkbox"
                                    value={sauce.price}
                                    onChange={this.handleChange} 
                                /> {sauce.name}, price: &euro;{sauce.price}<br/>
                            </label>
                        );
                    })}
                </div>
	        </div>
        )
    }
}

export default connect(null, { chooseSauce })(PizzaSauce)