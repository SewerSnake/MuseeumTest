var React = require('react')


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



module.exports = Menu;
