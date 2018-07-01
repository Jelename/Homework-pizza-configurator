import * as React from 'react'
import PizzaBase from './PizzaBase';
import PizzaSauce from './PizzaSauce';
import PizzaToppings from './PizzaToppings';
import TotalPrice from './TotalPrice'
//import { connect } from 'react-redux';

export default class StartMakingPizza extends React.PureComponent {
  render() {
      return (
          <div>
              <h1>Create your favorite pizza:</h1>
              <PizzaBase />
              <PizzaSauce />
              <PizzaToppings />
              <TotalPrice />
              {/* You chosed: {this.props.base}<br />
              You chosed: {this.props.sauce} */}
          </div>
      )
  }
}

// const mapStateToProps = state => {
//     return {
//         base: state.chooseBase,
//         sauce: state.chooseSauce
//     }
// }

//connect(mapStateToProps)(StartMakingPizza)