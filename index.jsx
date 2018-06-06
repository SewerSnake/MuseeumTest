


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


  var destination = document.querySelector(".logo");
  var destination2 = document.querySelector(".logoS");

  class LogoLetter extends React.Component {
    render() {
      return (
        <div id="logoletter">
        {this.props.children}
        </div>
      );
    }
  }
  class LogoLetter2 extends React.Component {
    render() {
      return(
        <div id="logoletter2">
    {this.props.children}
        </div>
      );
    }
  }

  ReactDOM.render(
    <div>
      <LogoLetter>P</LogoLetter>
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










  //MILJA KOD >>>
  class Menu extends React.Component{
    constructor(){
      super();
      this.state = {
        menuArray: []
      }
    }
    componentDidMount(){
      console.log('mounted');
      //postMenu()

      fetch('http://cities.jonkri.se/', {
        body: JSON.stringify({cafeMenu, id: MENU_ID}),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      }).then(response => response.json())
        .then(result => {
          console.log('got result');
          fetch('http://cities.jonkri.se/'+MENU_ID)
          .then(response => response.json())
          .then(result => {
            return result
          })
          .then(result => {
            console.log('got array');
            this.setState({ menuArray: result });
          });
        })
    }
    render(){
      console.log('render');
      return <div><h1>HALLOHALLOHALLOOOOO!!!</h1></div>
    }
  }

  var MENU_ID = 'fullmenu';
  var cafeMenu =
  [
    {
      name: "Espresso",
      population: 0,
      price: 2.10,
      sugar: false
    },
    {
      name: "Drip Coffee",
      population: 0,
      price: 2.20,
      sugar: false
    },
    {
      name: "Cold Brew",
      population: 0,
      price: 3.00,
      sugar: false
    },
    {
      name: "Ice Tea",
      population: 0,
      price: 2.95,
      sugar: false
    },
    {
      name: "Hot Tea",
      population: 0,
      price: 2.95,
      sugar: false
    },
    {
      name: "Cappuccino",
      population: 0,
      price: 2.85,
      sugar: false
    },
    {
      name: "Latte",
      population: 0,
      price: 2.95,
      sugar: false
    },
    {
      name: "Americano",
      population: 0,
      price: 2.40,
      sugar: false
    }
  ];
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
  class MenuSquare extends React.Component {
    render() {
      var squareStyle = {
        height: 120,
        backgroundColor: this.props.color,
        backgroundImage: "url("+this.props.image+")",
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      };
      return (
        <div style={squareStyle}></div>
      );
    }
  }
  class MenuLabel extends React.Component {
    render() {
      var labelStyle = {

        fontWeight: "bold",
        backgroundColor: this.props.colorL,
        padding: 13,
        height: 30,
        margin: 0
      };
      return (
        <p style={labelStyle}>{this.props.name}</p>
      );
    }
  }
  class MenuCard extends React.Component {
    render() {
      var cardStyle = {
        display: "inline-block",
        height: 150,
        width: 120,
        padding: 0,
        margin: 10,
        backgroundColor:"FFF",
        boxShadow: "0px 5px 1px #DCDCDC"
      };
      return (
        <div style={cardStyle}>
          <Square color={this.props.color} image={this.props.image}/>
          <Label colorL={this.props.colorL} name={this.props.name}/>
        </div>
      );
    }
  }
