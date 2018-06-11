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
var Colors = require('./components/colors.jsx');
var LogoLetter = require('./components/logoletter.jsx')
var LogoLetter2 = require('./components/logoletter2.jsx')
var reducer = require('./reducer.jsx');
var originalMenu = require('./cafeMenu.jsx');

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
          body: JSON.stringify({ originalMenu, id: MENU_ID}),
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST'
        }).then(response => response.json())
          .then(result => {
          console.log('POST result', result);
          var object = result.find(o => o.id === MENU_ID);
          store.dispatch({ type: 'SET_MENU', payload: object.originalMenu });
        });
      } else {
        console.log('Found old menu, resetting');
        fetch('http://cities.jonkri.se/' + MENU_ID, {
          method: 'DELETE'
        }).then(result => {
            console.log('Deleted');
            fetch('http://cities.jonkri.se/', {
              body: JSON.stringify({ originalMenu, id: MENU_ID }),
              headers: {'Content-Type': 'application/json' },
              method: 'POST'})
              .then(response => response.json())
              .then(result => {
                var object = result.find(o => o.id === MENU_ID);
                store.dispatch({ type: 'SET_MENU', payload: object.originalMenu })
              })
          })
      }
    });
}

var HashRouter = ReactRouterDOM.HashRouter; var NavLink = ReactRouterDOM.NavLink; var Route = ReactRouterDOM.Route;
ReactDOM.render(
  <Provider store={store}>
  <HashRouter>
    <div>
      <nav id="navigation">
        <ul id="navUl">
          <li id="navLi">
            <NavLink exact to="/" activeStyle={{borderBottom: "1px solid black"}}>Home</NavLink>
          </li>
          <li id="navLi">
            <NavLink to="/art" activeStyle={{borderBottom: "1px solid black"}}>Art</NavLink>
          </li>
          <li id="navLi">
            <NavLink to="/colors" activeStyle={{borderBottom: "1px solid black"}}>Colors</NavLink>
          </li>
          <li id="navLi">
            <NavLink to="/planner" activeStyle={{borderBottom: "1px solid black"}}>Planner</NavLink>
          </li>
          <li id="navLi">
            <NavLink to="/cafe" activeStyle={{borderBottom: "1px solid black"}} onClick={fetchsomthing} >Cafe</NavLink>
          </li>
        </ul>
      </nav>
      <Route exact={true} component={Home} path="/"   />
      <Route exact={true} component={Art} path="/art"   />
      <Route exact={true} component={Colors} path="/colors" />
      <Route component={ArtGallery} path="/art/:artistName" />
      <Route exact={true} component={Planner} path="/planner" />
      <Route component={Menu} path="/cafe" />
    </div>
  </HashRouter>
</Provider>, document.getElementById('box2'));
