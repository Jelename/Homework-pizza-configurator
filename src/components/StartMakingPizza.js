import * as React from 'react'
import PizzaBase from './PizzaBase';
import PizzaSauce from './PizzaSauce';
import PizzaToppings from './PizzaToppings';
import TotalPrice from './TotalPrice'

export default class StartMakingPizza extends React.PureComponent {
  render() {
      return (
          <div>
              <h1>Create your favorite pizza:</h1>
              <PizzaBase />
              <PizzaSauce />
              <PizzaToppings />
              <TotalPrice />
          </div>
      )
  }
}
