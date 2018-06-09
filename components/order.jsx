var React = require('react')
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var MenuCard = require('./menucard.jsx');
var Redux = require('redux');
var ReactRedux = require('react-redux');


class Order extends React.Component{
  // constructor() {
  //   super();
  //   this.state = {
  //     orderedItems: []
  //   }
  //   this.componentDidMount = this.componentDidMount.bind(this);
  //   this.componentDidUpdate = this.componentDidUpdate.bind(this);
  // }
  componentDidMount() {
    console.log('component did mount, Order');
  }
  componentDidUpdate() {
    console.log('component did update');
  }
  render() {
    var drinksOrdered = Object.values(this.props.menu).filter((drink) => drink.cups > 0);

    return <table>
      <tbody>
        <tr><th>Drink</th><th>Sugar</th><th>Amount</th></tr>
        <td>{drinksOrdered.map(drink => <tr key={drink.name}>{drink.name}</tr>)}</td>
        <td>Sugar yes/no</td>
        <td>2</td>
      </tbody>
    </table>
  }
}

var ConnectedOrder = ReactRedux.connect(
  function (state) {
    return { menu: state.menu };
  },
  function() {
    return {};
  })(Order);

module.exports = ConnectedOrder;
