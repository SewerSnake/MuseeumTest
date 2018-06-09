var React = require('react')
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var MenuCard = require('./menucard.jsx');
var Redux = require('redux');
var ReactRedux = require('react-redux');


class Order extends React.Component{
  // constructor() {
  //   // super();
  //   // this.state = {
  //   //   customerOrder: ''
  //   // }
  //   // this.componentDidMount = this.componentDidMount.bind(this);
  //   // this.componentDidUpdate = this.componentDidUpdate.bind(this);
  // }
  componentDidMount() {
    console.log('component did mount, Order');
    // // console.log('Order.jsx: this.props.menu', this.props.menu);
    // this.setState = ({order: 'didmount'});
    // console.log('customerOrder ', this.state.customerOrder);
  }
  componentDidUpdate() {
    console.log('component did update');
    var values = Object.values(this.props.menu);
    console.log('update, values', Object.values(this.props.menu));
    var drinksOrdered = values.filter((drink) => drink.cups > 0);
    console.log(drinksOrdered);
  }
  render() {
    return <table>
      <tbody>
        <tr><th>Drink</th><th>Sugar</th><th>Amount</th></tr>
        <td>Drip Coffee</td>
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
