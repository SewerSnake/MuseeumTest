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
          this.setState({ menuArray: result.cafeMenu });
        });
       })
  }
  handleClick(){
    console.log('Clicked!');
    console.log(this.state.menuArray);
    var finalOrder = this.state.menuArray;

    //TODO: Use PUT to post order menu to API. (then fetch menu and render a final order div?)
    fetch('http://cities.jonkri.se/'+MENU_ID, {
        body: JSON.stringify({ finalOrder, id: MENU_ID }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'PUT'
      }).then(response => response.json())
        .then(result => {
          console.log('final order:');
          console.log(result);
        });

  }
  render(){
    console.log('render');
    var menuItems = this.state.menuArray.map((item, index) => {
      return <MenuCard key={index} color="lightgrey" colorL="#FFFFFF" item={item} name={item.name} image={index} />
    });
    console.log(this.state.menuArray);
    return <div>{menuItems}<br/><br/><button type="button" onClick={this.handleClick}>Place order</button></div>
  }
}
var MENU_ID = 'fullmenu';
var cafeMenu =
[
  {
    name: "Espresso",
    population: 0,
    price: 2.10,
    sugar: false,
    orders: 0
  },
  {
    name: "Drip Coffee",
    population: 0,
    price: 2.20,
    sugar: false,
    orders: 0
  },
  {
    name: "Cold Brew",
    population: 0,
    price: 3.00,
    sugar: false,
    orders: 0
  },
  {
    name: "Ice Tea",
    population: 0,
    price: 2.95,
    sugar: false,
    orders: 0
  },
  {
    name: "Hot Tea",
    population: 0,
    price: 2.95,
    sugar: false,
    orders: 0
  },
  {
    name: "Cappuccino",
    population: 0,
    price: 2.85,
    sugar: false,
    orders: 0
  },
  {
    name: "Latte",
    population: 0,
    price: 2.95,
    sugar: false,
    orders: 0
  },
  {
    name: "Americano",
    population: 0,
    price: 2.40,
    sugar: false,
    orders: 0
  }
];

module.exports = Menu;
