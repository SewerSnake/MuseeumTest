var React = require('react')
var MenuCard = require('./menucard.jsx');

class Menu extends React.Component{
  constructor(){
    super();
    this.state = {
      menuArray: []
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    console.log('mounted');
/*
    fetch('http://cities.jonkri.se/', {
      body: JSON.stringify({cafeMenu, id: MENU_ID}),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(response => response.json())
      .then(result => {
        console.log('got result');
*/
        fetch('http://cities.jonkri.se/'+MENU_ID)
        .then(response => response.json())
        .then(result => {
          return result
        })
        .then(result => {
          this.setState({ menuArray: result.cafeMenu });
        });
//      })
  }
  handleClick(){
    console.log('Clicked!');
  }
  render(){
    console.log('render');

    var menuItems = this.state.menuArray.map((item, index) => {
      console.log(item.name);
      return <MenuCard onClick={this.handleClick} key={index} color="lightgrey" colorL="#FFC983" item={item} name={item.name} image={index} />
    });
    return <div>{menuItems}</div>
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
