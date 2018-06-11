var React = require('react');
var ReactDOM = require('react-dom');
var moment = require('moment');
var ReactRouterDOM = require('react-router-dom');
var { Provider } = require('react-redux');
var Redux = require('redux');
var ReactRedux = require('react-redux');

var Square = require('./components/square.jsx');
var Label = require('./components/label.jsx');
var Home = require('./components/home.jsx');
var ArtGallery = require('./components/artGallery.jsx');
var Card = require('./components/card.jsx');
var Art = require('./components/art.jsx');
var Planner = require('./components/planner.jsx');
var Menu = require('./components/menu.jsx');
var LogoLetter = require('./components/logoletter.jsx')
var LogoLetter2 = require('./components/logoletter2.jsx')
var reducer = require('./reducer.jsx');

var destination = document.querySelector(".logo");
var destination2 = document.querySelector(".logoS");

var store = Redux.createStore(reducer,
  {
    menu: {},
    menuId: 'fullmenu'
  }
);

ReactDOM.render(
  <div>
    <LogoLetter>M</LogoLetter>
    <LogoLetter>U</LogoLetter>
    <LogoLetter>S</LogoLetter>
    <LogoLetter>E</LogoLetter>
    <LogoLetter>U</LogoLetter>
    <LogoLetter>M</LogoLetter>
  </div>,
  destination
);
ReactDOM.render(
  <div>
    <LogoLetter2>A</LogoLetter2>
    <LogoLetter2>P</LogoLetter2>
    <LogoLetter2>P</LogoLetter2>
  </div>,
  destination2
);
var MENU_ID = 'fullmenu';

function fetchsomthing() {
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
          store.dispatch({ type: 'SET_MENU', payload: result.cafeMenu })
        })
      }
    })
}

var HashRouter = ReactRouterDOM.HashRouter; var Link = ReactRouterDOM.Link; var Route = ReactRouterDOM.Route;
ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    <div>
      <nav id="navigation">
        <ul id="navUl">
          <li id="navLi">
            <Link exact to="/" activeStyle={{borderBottom: "1px solid black"}}>Home</Link>
          </li>
          <li id="navLi">
            <Link exact to="/art" activeStyle={{borderBottom: "1px solid black"}}>Art</Link>
          </li>
          <li id="navLi">
            <Link exact to="/planner" activeStyle={{borderBottom: "1px solid black"}}>Planner</Link>
          </li>
          <li id="navLi">
            <Link exact to="/cafe" activeStyle={{borderBottom: "1px solid black"}} onClick={fetchsomthing} >Cafe</Link>
          </li>
        </ul>
      </nav>
      <Route exact={true} component={Home} path="/"   />
      <Route exact={true} component={Art} path="/art"   />
      <Route component={ArtGallery} path="/art/:artistName" />
      <Route exact={true} component={Planner} path="/planner" />
      <Route component={Menu} path="/cafe" />
    </div>
  </HashRouter>
</Provider>, document.getElementById('box2'));

  var cafeMenu =
  {
    espresso: {
      id: 'espresso',
      name: "Espresso",
      price: 2.10,
      sugar: false,
      cups: 0
    },
    dripcoffee: {
      id: 'dripcoffee',
      name: "Drip Coffee",
      price: 2.20,
      sugar: false,
      cups: 0
    },
    coldbrew: {
      id: 'coldbrew',
      name: "Cold Brew",
      price: 3.00,
      sugar: false,
      cups: 0
    },
    icetea: {
      id: 'icetea',
      name: "Ice Tea",
      price: 2.95,
      sugar: false,
      cups: 0
    },
    hottea: {
      id: 'hottea',
      name: "Hot Tea",
      price: 2.95,
      sugar: false,
      cups: 0
    },
    cappuccino: {
      id: 'cappuccino',
      name: "Cappuccino",
      price: 2.85,
      sugar: false,
      cups: 0
    },
    latte: {
      id: 'latte',
      name: "Latte",
      price: 2.95,
      sugar: false,
      cups: 0
    },
    americano: {
      id: 'americano',
      name: "Americano",
      price: 2.40,
      sugar: false,
      cups: 0
    }
  };
