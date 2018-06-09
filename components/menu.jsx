var React = require('react')
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var MenuCard = require('./menucard.jsx');
var Redux = require('redux');
var ReactRedux = require('react-redux');

var Order = require('./order.jsx');

var MENU_ID = 'fullmenu';
class Menu extends React.Component {
  render() {
    return <div>
      <h1>Welcome to the Museum Cafe</h1><br />
      <p>Nothing better than a cup of coffee after fine art. Place your order here and pick it up at the museum café after your tour.</p><br />
      {Object.values(this.props.menu).map((item, index) => {
      return <MenuCard key={index} color="lightgrey" colorL="#FFFFFF" item={item} name={item.name} image={item.id} />
      })}<br /><br />
      <Order>{Order}</Order>
      </div>;
  }
}
var ConnectedMenu = ReactRedux.connect(
  function(state) {
    return { menu: state.menu };
  },
  function(dispatch){
    return {
      addMenu: function() {
        return dispatch({
          type: 'SET_MENU'
        })
      }
    };
  })(Menu);

var cafeMenu =
{
  espresso: {
    name: "Espresso",
    price: 2.10,
    sugar: false,
    cups: 0
  },
  dripcoffee: {
    name: "Drip Coffee",
    price: 2.20,
    sugar: false,
    cups: 0
  },
  coldbrew: {
    name: "Cold Brew",
    price: 3.00,
    sugar: false,
    cups: 0
  },
  icetea: {
    name: "Ice Tea",
    price: 2.95,
    sugar: false,
    cups: 0
  },
  hottea: {
    name: "Hot Tea",
    price: 2.95,
    sugar: false,
    cups: 0
  },
  cappuccino: {
    name: "Cappuccino",
    price: 2.85,
    sugar: false,
    cups: 0
  },
  latte: {
    name: "Latte",
    price: 2.95,
    sugar: false,
    cups: 0
  },
  americano: {
    name: "Americano",
    price: 2.40,
    sugar: false,
    cups: 0
  }
};
module.exports = ConnectedMenu;
