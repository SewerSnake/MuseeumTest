var React = require('react')
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var MenuCard = require('./menucard.jsx');
var Redux = require('redux');
var ReactRedux = require('react-redux');

var MENU_ID = 'fullmenu';
class Menu extends React.Component {
  render() {

    console.log('rendesjdlöskdfjlöaskjdfr');
    console.log(this.props.menu);
    var array = Object.values(this.props.menu);
    console.log(array);

    var menuItems = array.map((item, index) => {
      return <MenuCard key={index} color="lightgrey" colorL="#FFFFFF" item={item} name={item.name} image={index} />
    });

    return <div>{menuItems}</div>;
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
//REDUCER
// var reducer = function(state, action) {
//   console.log('action: ', action.payload);
//   switch (action.type) {
//     case 'SET_MENU':
//       return {
//         menu: action.payload
//       };
//     default: return state;
//   }
// };
//STATE: menu: { drink: {...}, {...} }
// var store = Redux.createStore(reducer, { menu: {}, id: MENU_ID});
// API ANROP - NOLLSTÄLLER MENYN

// ReactDOM.render(<Provider store={store}>
// <div>{ConnectedMenu}</div>
// </Provider>, document.getElementById('box2'));
// >>>>>> REDUX END TEST
// class Menu extends React.Component{
//   constructor(){
//     super();
//     this.state = {
//       menuArray: []
//     }
//     this.handleClick = this.handleClick.bind(this);
//   }
//   componentDidMount(){
//     console.log('mounted');
//
//     // fetch('http://cities.jonkri.se/', {
//     //   body: JSON.stringify({cafeMenu, id: MENU_ID}),
//     //   headers: {
//     //     'Content-Type': 'application/json'
//     //   },
//     //   method: 'POST'
//     // }).then(response => response.json())
//     //   .then(result => {
//     //     console.log('got result');
//
//         fetch('http://cities.jonkri.se/'+MENU_ID)
//         .then(response => response.json())
//         .then(result => {
//           return result
//         })
//         .then(result => {
//           this.setState({ menuArray: result.cafeMenu });
//         });
//     //  })
//   }
//   handleClick(){
//     console.log('Clicked!');
//     console.log(this.state.menuArray);
//     var finalOrder = this.state.menuArray;
//
//     //TODO: Use PUT to post order menu to API. (then fetch menu and render a final order div?)
//     fetch('http://cities.jonkri.se/'+MENU_ID, {
//         body: JSON.stringify({ finalOrder, id: MENU_ID }),
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         method: 'PUT'
//       }).then(response => response.json())
//         .then(result => {
//           console.log('final order:');
//           console.log(result);
//         });
//
//   }
//   render(){
//     console.log('render');
//     var menuItems = this.state.menuArray.map((item, index) => {
//       return <MenuCard key={index} color="lightgrey" colorL="#FFFFFF" item={item} name={item.name} image={index} />
//     });
//     console.log(this.state.menuArray);
//     return <div>{menuItems}<br/><br/><button type="button" onClick={this.handleClick}>Place order</button></div>
//   }
// }
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
