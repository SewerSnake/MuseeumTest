


var React = require('react');
var ReactDOM = require('react-dom');
var moment = require('moment');
var ReactRouterDOM = require('react-router-dom');

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

var destination = document.querySelector(".logo");
var destination2 = document.querySelector(".logoS");

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





  // var homePageContent = document.querySelector(".content-wrap");
// 1. Card component with 3parts

// ReactDOM.render (
//   <div>
//     <Card color="Webpack" color="#FFA737" image={'media/webpack.svg'}/>
//     <Card color="#FFA737" colorL="#2B2B2B" name="React" image={'media/React-icon.svg'}/>
//     <Card name="Jsx" image={'media/jsx.png'}/>
//   </div>,
//   homePageContent
// );

    // function updateOrder(){
    //   fetch('http://cities.jonkri.se/'+MENU_ID, {
    //     body: JSON.stringify({ EDITEDMENU }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     method: 'PUT'
    //   }).then(response => response.json())
    //     .then(result => {
    //       console.log(result);
    //     });
    // }

  //<<< MILJA KOD SLUT

  var HashRouter = ReactRouterDOM.HashRouter; var Link = ReactRouterDOM.Link; var Route = ReactRouterDOM.Route; ReactDOM.render(

  <HashRouter>
    <div>
      <nav id="navigation">
        <ul id="navUl">
          <li id="navLi">
            <Link to="/">Home</Link>
          </li>
          <li id="navLi">
            <Link to="/art">Art</Link>
          </li>
          <li id="navLi">
            <Link to="/planner">Planner</Link>
          </li>
          <li id="navLi">
            <Link to="/cafe">Cafe</Link>
          </li>
        </ul>
      </nav>
      <Route exact={true} component={Home} path="/"   />
      <Route exact={true} component={Art} path="/art"   />
      <Route component={ArtGallery} path="/art/:artistName" />
      <Route exact={true} component={Planner} path="/planner" />
      <Route component={Menu} path="/cafe" />
    </div>
  </HashRouter>, document.getElementById('box2'));


  //CAFE

  // Menu Card component
