var React = require('react')
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var MenuCard = require('./menucard.jsx');
var Redux = require('redux');
var ReactRedux = require('react-redux');

class Order extends React.Component{
  render() {
    var drinksOrdered = Object.values(this.props.menu).filter((drink) => drink.cups > 0);
    return <div><table>
      <tbody>
        <tr><th>YOUR CURRENT ORDER</th></tr>

        <tr><th>Drink</th><th>Sugar</th><th>Amount</th></tr>
        {drinksOrdered.map(function (drink) {
          var sugar = '';
          if (drink.sugar) {
            sugar = 'yes';
          }

          return <tr key={drink.name}>
            <td>{drink.name}</td>
            <td>{sugar}</td>
            <td>{drink.cups} cups</td>
          </tr>;
        })}
      </tbody>
    </table>
    <input id="placeOrder" type='button' onClick={this.props.placeOrder} value="Place Order" />
    </div>
  }
}

var ConnectedOrder = ReactRedux.connect(
  function (state) {
    return { menu: state.menu };
  },
  function(dispatch){
    return {
      placeOrder: function() {
        return dispatch({
          type: 'PLACE_ORDER'
        })
      }
    };
  })(Order);

module.exports = ConnectedOrder;
