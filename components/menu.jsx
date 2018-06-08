var React = require('react')
var ReactDOM = require('react-dom');
var { Provider } = require('react-redux');
var MenuCard = require('./menucard.jsx');
var Redux = require('redux');
var ReactRedux = require('react-redux');

// <<<<<< REDUX TEST

var MENU_ID = 'fullmenu';

class Menu extends React.Component {
  render() {
    console.log('render');
    console.log(this.props.menu);
    return <div><h1>...</h1></div>;
  }
}

var ConnectedMenu = ReactRedux.connect(
  function(state) {
    return { menu: state.menu };
  },
  function(dispatch){
    return {
      addMenu: function() {
        console.log('button');
        return dispatch({
          type: 'SET_MENU'
        })
      }
    };
  })(Menu);

//REDUCER
var reducer = function(state, action) {
  console.log('action: ', action.payload);
  switch (action.type) {
    case 'SET_MENU':
      console.log('setmenu');
      return {
        state: action.payload
      };
    default: return state;
  }
};

//STATE: menu: { drink: {...}, {...} }
var store = Redux.createStore(reducer, { menu: {}, id: MENU_ID});

// API ANROP - NOLLSTÄLLER MENYN
fetch('http://cities.jonkri.se')
  .then(response => response.json())
  .then(result => {
    var array = result;
    let object = array.find(o => o.id === MENU_ID);
    if (object === undefined) {
      console.log('Menu not found, POSTing')
      fetch('http://cities.jonkri.se/', {
        body: JSON.stringify({cafeMenu, id: MENU_ID}),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(response => response.json())
        .then(result => {
        console.log('POST result', result);
        var object = result.find(o => o.id === MENU_ID);
        console.log('object:', object);
        store.dispatch({ type: 'SET_MENU', payload: object });
      })
    }  else {
      console.log('Found old menu, resetting');
      // DELETE EDITED MENU
      // fetch('http://cities.jonkri.se/'+MENU_ID, {
      //   method: 'DELETE'
      // })
      fetch('http://cities.jonkri.se/' + MENU_ID, {
        body: JSON.stringify({cafeMenu, id: MENU_ID}),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'PUT'})
      .then(response => response.json()).then(result => {
        console.log('PUT result', result); //Get ett {menu:, id: }
        store.dispatch({ type: 'SET_MENU', payload: result})
      })
    }
  })

ReactDOM.render(<Provider store={store}>
<div><ConnectedMenu/ ></div>
</Provider>, document.getElementById('box2'));

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

module.exports = Menu;
