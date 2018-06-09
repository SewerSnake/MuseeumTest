var React = require('react')
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var MenuCard = require('./menucard.jsx');
var Redux = require('redux');
var ReactRedux = require('react-redux');


class Order extends React.Component{
  componentDidMount() {
    console.log('component did mount, Order');
    console.log('Order.jsx: this.props.menu', this.props.menu);
    var values = Object.values(this.props.menu);
    console.log('values', Object.values(this.props.menu));
    console.log(values.filter((drink) => drink.sugar));
  }
  render() {
    return <p>Your shopping card.</p>
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
